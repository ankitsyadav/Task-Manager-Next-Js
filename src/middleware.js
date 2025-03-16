import { NextResponse } from "next/server";

export async function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value;
  const isLoginPage = request.nextUrl.pathname.startsWith("/login");
  const isSignUpPage = request.nextUrl.pathname.startsWith("/signup");
  const isProfilePage = request.nextUrl.pathname.startsWith("/profile");

  if (isProfilePage || request.nextUrl.pathname.startsWith("/api")) {
    if (!authToken) {
      console.log("auth token nahi h to return login");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if ((isLoginPage || isSignUpPage) && authToken) {
    console.log("yes");
    return NextResponse.redirect(new URL("/profile/user", request.url));
  } else if (!isLoginPage && !isSignUpPage && !authToken) {
    console.log("login");
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/add-task",
    "/",
    "/signup",
    "/show-tasks",
    "/profile/:path*",
    "/login",
  ],
};
