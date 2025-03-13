import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/helper/db";

connectDB();

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const user = await User.findOne({ email: email });

    if (user == null) {
      throw new Error("User Not Found");
    }

    if (bcrypt.compareSync(password, user.password)) {
    } else {
      throw new Error("Wrong Password");
    }
    // generate token

    const token = jwt.sign(
      {
        _id: user.id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    let res = NextResponse.json({
      message: "Login Success",
      success: true,
    });
    res.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: false,
    });
    return res;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}
