import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY_1;

console.log("Testing Notes Generation...");
console.log("API Key present:", !!GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const prompt = `You are an expert educator and note-taking assistant.

Generate concise and clear notes on the following:

Subject: Data Structures
Topic: Binary Trees

Format the notes in bullet points.

Structure the notes with:
1. 📌 Introduction - Brief overview of the topic
2. 🧠 Key Concepts - Main ideas and definitions
3. 📊 Examples - Practical examples if applicable
4. ✨ Summary - Quick revision points

Use markdown formatting for better readability.
Make it student-friendly and easy to understand.`;

try {
  console.log("Generating notes...");
  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log("\n✅ SUCCESS!\n");
  console.log(response.text());
} catch (err) {
  console.error("❌ Error:", err.message);
}
