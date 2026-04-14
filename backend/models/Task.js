import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    text:     { type: String, required: true, trim: true },
    status:   { type: String, enum: ["todo", "in-progress", "completed"], default: "todo" },
    priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
    dueDate:  { type: String, default: null },
    date:     { type: String, default: () => new Date().toDateString() },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
