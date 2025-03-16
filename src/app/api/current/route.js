import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";

export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  if (!authToken) {
    return NextResponse.json(
      { error: "No authentication token provided" },
      { status: 401 }
    );
  }

  try {
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    console.log(data);
    const user = await User.findById(data._id).select("-password");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.json(
      { error: "Invalid authentication token" },
      { status: 401 }
    );
  }
}
