"use client";
import React, { useContext, useState, useEffect } from "react";
import login from "@/assets/login.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { loginService } from "../services/signInService";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const authToken = document.cookie.includes("authToken");
    if (authToken && context.user) {
      router.push("/profile/user");
    }
  }, [context.user, router]);

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      let res = await loginService(loginData);
      console.timeLog(res);
      context.setUser(res.user);
      router.push("/profile/user"); // Changed from "/profile/user" to "/"
      toast.success(`Login Success !!`, {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
  };

  const handleClearUser = () => {
    setLoginData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileUrl: "https://i.postimg.cc/vBsNw0ff/1705516994728.jpg",
    });
  };

  const handleInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-12 justify-center bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className="col-span-6 col-start-4 justify-center p-4 rounded-b-2xl shadow-lg bg-white">
        <div className="flex justify-center items-center mt-2">
          <Image
            src={login}
            alt="img logo"
            width={150}
            height={75}
            className="rounded-2xl"
          ></Image>
        </div>
        <div className="flex justify-center mt-1">
          <h1 className="text-3xl font-bold text-gray-800">Log In</h1>
        </div>

        <form action="#!" className="mt-4 space-y-4">
          <div className="mt-1.5">
            <label
              htmlFor="task_title"
              className="block text-xl font-medium text-gray-700"
            >
              Enter Email
            </label>
            <input
              type="email"
              id="task_title"
              className="w-full p-2.5 border-2 border-gray-300 rounded-md bg-white shadow-sm"
              name="email"
              onChange={handleInput}
              value={loginData.email}
            />
          </div>
          <div className="mt-1.5">
            <label
              htmlFor="password"
              className="block text-xl font-medium text-gray-700"
            >
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2.5 border-2 border-gray-300 rounded-md bg-white shadow-sm"
              name="password"
              onChange={handleInput}
              value={loginData.password}
            />
          </div>

          <div className="flex space-x-5 items-center justify-center mt-4 pt-2 pb-2">
            <button
              className="bg-green-600 hover:bg-emerald-200 rounded-md px-4 py-2 text-white font-bold shadow-lg"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              className="bg-red-500 hover:bg-emerald-200 rounded-md px-4 py-2 text-white font-bold shadow-lg"
              onClick={handleClearUser}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
