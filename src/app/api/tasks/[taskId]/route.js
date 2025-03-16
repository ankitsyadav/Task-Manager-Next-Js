import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import { Task } from "@/models/task";

connectDB();

export async function PUT(request, { params }) {
  const { taskId } = params;
  const { title, desc, addedDate, status, userId } = await request.json();
  console.log(title, desc, addedDate, status, userId);

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      { _id: taskId },
      { title, desc, addedDate, status, userId },
      { new: true }
    );
    return NextResponse.json(updatedTask, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Update TaskFailed failed",
    });
  }
}

export async function GET(request, { params }) {
  const { taskId } = params;
  try {
    const task = await Task.findOne({ _id: taskId });
    return NextResponse.json(task, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "get single task failed",
    });
  }
}

export async function DELETE(request, { params }) {
  const { taskId } = params;
  try {
    await Task.deleteOne({ _id: taskId });
    return NextResponse.json({
      message: `Task with id ${taskId} has been deleted`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "unable to delete Task",
    });
  }
}
