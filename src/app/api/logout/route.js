import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    message: "Logged OUT",
    success: true,
  });
  response.cookies.set("authToken", "", {
    expires: new Date(0),
  });
  return response;
}
