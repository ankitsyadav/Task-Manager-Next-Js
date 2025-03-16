import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/helper/db";

connectDB();

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const user = await User.findOne({ email });

    if (!user) throw new Error("User Not Found");
    if (!bcrypt.compareSync(password, user.password))
      throw new Error("Wrong Password");

    const token = jwt.sign(
      { _id: user.id, name: user.name },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json(
      { message: "Login Success", success: true, token, user: user },
      { status: 200 }
    );
    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: error.message, status: false },
      { status: 500 }
    );
  }
}
