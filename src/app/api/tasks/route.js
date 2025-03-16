import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import jwt from "jsonwebtoken";

connectDB();

// get all users
export async function GET(request) {
  let tasks = [];
  try {
    tasks = await Task.find();
    return NextResponse.json(tasks, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "get tasks failed",
      },
      { status: 500 }
    );
  }
}
// create user
export async function POST(request) {
  const { title, desc } = await request.json();

  // fetching logged in user id
  const authToken = request.cookies.get("authToken")?.value;
  if (!authToken) {
    return NextResponse.json(
      { error: "No authentication token provided" },
      { status: 401 }
    );
  }

  try {
    const data = jwt.verify(authToken, process.env.JWT_KEY);

    const task = new Task({
      title,
      desc,
      userId: data._id,
    });
    const createdTask = await task.save();
    console.log(createdTask);
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create task",
        status: false,
      },
      { status: 500 }
    );
  }
}
