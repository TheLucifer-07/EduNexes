import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./auth.js";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from backend folder
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

// MongoDB Connection
const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI not defined in .env file");
    }
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Load Gemini API key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY_1;
const YOUTUBE_TRANSCRIPT_API_KEY = process.env.YOUTUBE_TRANSCRIPT_API_KEY;

// Log API key status
if (!GEMINI_API_KEY) {
  console.warn("⚠️  GEMINI API KEY NOT FOUND - Add GEMINI_API_KEY_1 to environment variables");
} else {
  console.log("🔑 Gemini API Key Loaded ✅");
}

if (!YOUTUBE_TRANSCRIPT_API_KEY) {
  console.warn("⚠️  YOUTUBE TRANSCRIPT API KEY NOT FOUND - Add YOUTUBE_TRANSCRIPT_API_KEY to environment variables");
}

// Initialize Gemini (lazy initialization)
let genAI = null;
let model = null;

// YouTube transcription helpers
const getYouTubeVideoId = (videoUrl) => {
  try {
    const parsedUrl = new URL(videoUrl);
    const host = parsedUrl.hostname.replace(/^www\./, "").toLowerCase();
    const parts = parsedUrl.pathname.split("/").filter(Boolean);

    if (host === "youtu.be" && parts[0]) return parts[0];
    if (host.endsWith("youtube.com")) {
      if (parsedUrl.searchParams.get("v")) return parsedUrl.searchParams.get("v");
      if (["shorts", "embed", "live"].includes(parts[0]) && parts[1]) return parts[1];
    }
  } catch {
    return null;
  }

  return null;
};

const buildTranscriptText = (payload) => {
  const transcript = payload?.data?.transcript;
  if (!transcript) return "";
  if (typeof transcript.text === "string" && transcript.text.trim()) return transcript.text.trim();
  if (Array.isArray(transcript.segments)) {
    return transcript.segments
      .map((segment) => segment?.text?.trim())
      .filter(Boolean)
      .join(" ");
  }
  return "";
};

const fetchYouTubeTranscript = async (videoUrl) => {
  if (!YOUTUBE_TRANSCRIPT_API_KEY) {
    const error = new Error("Transcript API key is not configured");
    error.code = "TRANSCRIPT_API_KEY_MISSING";
    throw error;
  }

  const videoId = getYouTubeVideoId(videoUrl);
  if (!videoId) {
    const error = new Error("Invalid YouTube URL");
    error.code = "INVALID_URL";
    throw error;
  }

  const response = await fetch("https://youtubetranscript.dev/api/v2/transcribe", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${YOUTUBE_TRANSCRIPT_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      video: videoId,
      language: "en",
      source: "auto",
      format: { timestamp: false, paragraphs: false },
    }),
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const error = new Error(
      response.status === 404
        ? "Transcript not available for this video"
        : payload?.error || payload?.message || "Transcript API request failed"
    );
    error.code = payload?.code || `TRANSCRIPT_API_${response.status}`;
    throw error;
  }

  const transcriptText = buildTranscriptText(payload);
  if (!transcriptText) {
    const error = new Error("Transcript not available for this video");
    error.code = "NO_CAPTIONS";
    throw error;
  }

  return transcriptText;
};

const initializeGemini = (modelName = "gemini-flash-latest") => {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY_1 is not set in environment variables");
  }
  if (!genAI) genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  return genAI.getGenerativeModel({ model: modelName });
};

const generateWithGemini = async (prompt) => {
  const models = ["gemini-flash-latest", "gemini-2.5-flash-lite", "gemini-2.5-flash"];
  let lastErr;
  for (const m of models) {
    try {
      const geminiModel = initializeGemini(m);
      const result = await geminiModel.generateContent(prompt);
      return result.response.text();
    } catch (err) {
      console.warn(`⚠️  Model ${m} failed: ${err.message}`);
      lastErr = err;
    }
  }
  throw new Error("All Gemini models failed: " + lastErr.message);
};

// Gemini function for PDF analysis
const analyzeResumeWithGemini = async (pdfBase64, role) => {
  const models = ["gemini-flash-latest", "gemini-2.5-flash-lite", "gemini-2.5-flash"];
  let lastErr;
  for (const m of models) {
    try {
      if (!genAI) genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const geminiModel = genAI.getGenerativeModel({ model: m });
      const prompt = `You are an expert resume reviewer and career advisor.

Analyze this resume for the role: ${role}

Provide a detailed analysis in the following format:

✅ STRENGTHS:
- List 3-5 strong points in the resume
- Highlight relevant experience and skills for ${role}
- Mention good formatting or structure

⚠️ IMPROVEMENTS NEEDED:
- List 3-5 specific areas that need improvement
- Point out missing keywords for ${role}
- Suggest better ways to present experience

🚀 SUGGESTIONS:
- Provide 3-5 actionable recommendations
- Suggest how to tailor resume for ${role}
- Recommend better action verbs or phrases

📚 SKILLS TO LEARN:
- List 5-7 technical skills needed for ${role} that are missing
- Prioritize most important skills first
- Include both technical and soft skills

Keep the analysis professional, constructive, and actionable.`;
      const result = await geminiModel.generateContent([prompt, { inlineData: { mimeType: "application/pdf", data: pdfBase64 } }]);
      return result.response.text();
    } catch (err) {
      console.warn(`⚠️  Resume model ${m} failed: ${err.message}`);
      lastErr = err;
    }
  }
  throw new Error("Resume analysis failed: " + lastErr.message);
};

// Health check route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running");
});

// Resume analysis route
app.post("/api/resume", async (req, res) => {
  const { pdfBase64, role } = req.body;

  console.log("📄 Resume analysis request for role:", role);

  // Validation
  if (!pdfBase64) {
    return res.status(400).json({ error: "PDF file is required" });
  }

  if (!role) {
    return res.status(400).json({ error: "Role is required" });
  }

  try {
    console.log("🤖 Analyzing resume with Gemini...");
    
    const analysis = await analyzeResumeWithGemini(pdfBase64, role);
    
    console.log("✅ Resume analysis complete");
    
    res.json({ result: analysis });
  } catch (err) {
    console.error("❌ Resume Analysis Error:", err.message);
    res.status(500).json({
      error: err.message || "Resume analysis failed",
    });
  }
});

// Notes generation route
app.post("/api/notes", async (req, res) => {
  const { subject, topic, type, format } = req.body;

  console.log("📝 Notes generation request:", { subject, topic, type, format });

  // Validation
  if (!subject || !topic) {
    return res.status(400).json({ error: "Subject and topic are required" });
  }

  try {
    const prompt = `You are an expert educator and note-taking assistant.

Generate ${type === "Detailed" ? "detailed and comprehensive" : "concise and clear"} notes on the following:

Subject: ${subject}
Topic: ${topic}

Format the notes in ${format === "Bullet" ? "bullet points" : "paragraph form"}.

Structure the notes with:
1. 📌 Introduction - Brief overview of the topic
2. 🧠 Key Concepts - Main ideas and definitions
3. 📊 Examples - Practical examples if applicable
4. ✨ Summary - Quick revision points

Use markdown formatting for better readability.
Make it student-friendly and easy to understand.`;

    console.log("🤖 Generating notes with Gemini...");
    
    const notes = await generateWithGemini(prompt);
    
    console.log("✅ Notes generation complete");
    
    res.json({ result: notes });
  } catch (err) {
    console.error("❌ Notes Generation Error:", err.message);
    res.status(500).json({
      error: err.message || "Notes generation failed",
    });
  }
});

// YouTube API route
app.post("/api/youtube", async (req, res) => {
  const { url } = req.body;

  console.log("📩 URL:", url);

  // Validation
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
    return res.status(400).json({ error: "Invalid YouTube URL" });
  }

  try {
    console.log("📝 Fetching YouTube transcript...");
    const transcriptText = await fetchYouTubeTranscript(url);

    if (!transcriptText || transcriptText.trim().length === 0) {
      return res.status(404).json({
        success: false,
        error: "Transcript not available for this video",
      });
    }

    console.log("✅ Transcript fetched");

    try {
      // Limit transcript size (important for Gemini)
      const transcript = transcriptText.slice(0, 8000);

      const prompt = `
You are an AI study assistant.

Convert the following YouTube transcript into:

1. 📄 Summary (clear & simple)
2. 🧠 Key Points (bullet points)
3. 🌳 Mind Map (structured)

Keep it clean and readable.

Transcript:
${transcript}
`;

      console.log("🤖 Sending to Gemini...");

      const aiResult = await generateWithGemini(prompt);

      console.log("✅ AI Response Ready");

      res.json({ result: aiResult });

    } catch (err) {
      console.error("❌ AI Processing Error:", err.message);
      res.status(500).json({
        error: err.message || "AI processing failed",
      });
    }
  } catch (err) {
    console.error("❌ YouTube Transcription Error:", err.message);

    const statusCode = err.code === "INVALID_URL" ? 400 : err.code === "NO_CAPTIONS" ? 404 : 502;
    return res.status(statusCode).json({
      success: false,
      error: err.message || "Failed to fetch transcript",
      code: err.code || "YOUTUBE_TRANSCRIPTION_FAILED",
    });
  }
});

// Chat route
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  console.log("💬 Chat request:", message);

  // Validation
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const prompt = `You are a helpful, friendly, and knowledgeable AI assistant.

User: ${message}

Provide a clear, concise, and helpful response. Be conversational and engaging.`;

    console.log("🤖 Generating chat response with Gemini...");
    
    const response = await generateWithGemini(prompt);
    
    console.log("✅ Chat response complete");
    
    res.json({ response });
  } catch (err) {
    console.error("❌ Chat Error:", err.message);
    res.status(500).json({
      error: err.message || "Chat failed",
    });
  }
});

// Auth Routes
app.use("/api", authRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error("❌ Server failed to start:", err.message);
  process.exit(1);
});
