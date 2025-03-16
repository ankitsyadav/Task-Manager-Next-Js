import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";

connectDB();

export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, email, password, about, profileUrl } = await request.json();
  console.log(name, email, password, about, profileUrl);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      { name, email, password, about, profileUrl },
      { new: true }
    );
    return NextResponse.json(updatedUser, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "get single user failed",
    });
  }
}

export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json(user, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "get single user failed",
    });
  }
}

export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({ _id: userId });
    return NextResponse.json({
      message: `User with id ${userId} has been deleted`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "unable to delete user",
    });
  }
}
