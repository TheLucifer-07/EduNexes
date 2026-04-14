import express from "express";
import jwt from "jsonwebtoken";
import User from "./models/User.js";
import Task from "./models/Task.js";

const router = express.Router();

// Helper — verify token and return user id
const verifyToken = (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) throw new Error("No token");
  return jwt.verify(token, process.env.JWT_SECRET).id;
};
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// SIGNUP Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please provide all required fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Create new user
    const user = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password,
    });

    await user.save();

    // Generate token
    const token = generateToken(user._id);

    // Return user data (without password)
    const userWithoutPassword = {
      _id: user._id,
      name: user.name,
      email: user.email,
      streak: user.streak,
      lastCompletedDate: user.lastCompletedDate,
      createdAt: user.createdAt,
    };

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      token,
      user: userWithoutPassword,
    });
  } catch (err) {
    console.error("❌ Signup Error:", err.message);
    
    // Handle validation errors
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ error: messages.join(", ") });
    }

    // Handle duplicate key error
    if (err.code === 11000) {
      return res.status(400).json({ error: "Email already registered" });
    }

    res.status(500).json({ error: err.message || "Signup failed" });
  }
});

// LOGIN Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: "Please provide email and password" });
    }

    // Find user and include password field
    const user = await User.findOne({ email: email.toLowerCase().trim() }).select(
      "+password"
    );

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Check password
    const isPasswordValid = await user.matchPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate token
    const token = generateToken(user._id);

    // Return user data (without password)
    const userWithoutPassword = {
      _id: user._id,
      name: user.name,
      email: user.email,
      streak: user.streak,
      lastCompletedDate: user.lastCompletedDate,
      createdAt: user.createdAt,
    };

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: userWithoutPassword,
    });
  } catch (err) {
    console.error("❌ Login Error:", err.message);
    res.status(500).json({ error: err.message || "Login failed" });
  }
});

// PATCH streak when a task is completed
router.patch("/task/complete", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const last = user.lastCompletedDate ? new Date(user.lastCompletedDate) : null;
    if (last) last.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (!last || last < yesterday) {
      user.streak = 1;
    } else if (last.getTime() === yesterday.getTime()) {
      user.streak += 1;
    }
    // if last === today, streak already counted, don't increment

    user.lastCompletedDate = today;
    await user.save();

    res.json({ streak: user.streak, lastCompletedDate: user.lastCompletedDate });
  } catch (err) {
    console.error("❌ Streak Error:", err.message);
    res.status(500).json({ error: "Streak update failed" });
  }
});

// GET Current User (Protected Route Example)
router.get("/me", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    console.error("❌ Get User Error:", err.message);
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

// ── TASK ROUTES ──────────────────────────────────────────

const getUID = (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) throw new Error("No token");
  return jwt.verify(token, process.env.JWT_SECRET).id;
};

// GET all tasks for user
router.get("/tasks", async (req, res) => {
  try {
    const uid = getUID(req);
    const tasks = await Task.find({ userId: uid }).sort({ createdAt: -1 });
    res.json({ tasks });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

// POST create task
router.post("/tasks", async (req, res) => {
  try {
    const uid = getUID(req);
    const { text, priority, dueDate, date } = req.body;
    const task = await Task.create({ userId: uid, text, priority, dueDate, date });
    res.status(201).json({ task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH update task (status, text)
router.patch("/tasks/:id", async (req, res) => {
  try {
    const uid = getUID(req);
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: uid },
      { $set: req.body },
      { returnDocument: "after" }
    );
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json({ task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE task
router.delete("/tasks/:id", async (req, res) => {
  try {
    const uid = getUID(req);
    await Task.findOneAndDelete({ _id: req.params.id, userId: uid });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
