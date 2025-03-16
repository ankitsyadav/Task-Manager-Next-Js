import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import { Task } from "@/models/task";

connectDB();

// get all users
export async function GET(request, { params }) {
  const { userId } = params;
  let tasks = [];
  try {
    tasks = await Task.find({ userId: userId });
    return NextResponse.json(tasks, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "get tasks failed",
    });
  }
}
// create user
