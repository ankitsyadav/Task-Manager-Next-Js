import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required..."],
  },
  desc: {
    type: String,
    required: [true, "Task Description is required..."],
  },
  addedDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", TaskSchema);
