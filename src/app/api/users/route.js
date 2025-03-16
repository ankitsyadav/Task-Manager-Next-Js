import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";

connectDB();

// get all users
export async function GET(request) {
  let users = [];
  try {
    users = await User.find().select("-password");
    return NextResponse.json(users, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "get users failed",
    });
  }
}
// create user
export async function POST(request) {
  const { name, email, password, about, profileUrl } = await request.json();
  console.log(name, email, password, about, profileUrl);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    about,
    profileUrl,
  });
  try {
    const createdUser = await user.save();
    return NextResponse.json(createdUser, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create user",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}
