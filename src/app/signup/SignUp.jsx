"use client";
import React, { useState } from "react";
import signup from "@/assets/signup.svg";
import Image from "next/image";
import { addUser } from "../services/signUpService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileUrl: "https://i.postimg.cc/vBsNw0ff/1705516994728.jpg",
  });

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      console.log(user);

      const res = await addUser(user);

      toast.success("User Created Successfully", {
        position: "bottom-right",
      });
      router.push("/login");

      setUser({
        name: "",
        email: "",
        password: "",
        about: "",
        profileUrl: "https://i.postimg.cc/vBsNw0ff/1705516994728.jpg",
      });
    } catch (error) {
      console.log(error);
      toast.error(`Error !! ${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
  };

  const handleClearUser = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      about: "",
      profileUrl: "https://i.postimg.cc/vBsNw0ff/1705516994728.jpg",
    });
  };
  return (
    <div className="grid grid-cols-12 justify-center bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className="col-span-6 col-start-4 justify-center p-4 rounded-lg shadow-lg bg-white">
        <div className="flex justify-center items-center mt-2">
          <Image
            src={signup}
            alt="img logo"
            width={100}
            height={50}
            className="rounded-full"
          ></Image>
        </div>
        <div className="flex justify-center mt-1">
          <h1 className="text-3xl font-bold text-gray-800">Sign Up here</h1>
        </div>

        <form action="#!" className="mt-4 space-y-4">
          <div className="mt-1.5">
            <label
              htmlFor="task_title"
              className="block text-xl font-medium text-gray-700"
            >
              Enter Name
            </label>
            <input
              type="text"
              id="task_title"
              className="w-full p-2 border-2 border-gray-300 rounded-md bg-white shadow-sm"
              name="user_name"
              onChange={(event) => {
                setUser({
                  ...user,
                  name: event.target.value,
                });
              }}
              value={user.name}
            />
          </div>
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
              name="user_email"
              onChange={(event) => {
                setUser({
                  ...user,
                  email: event.target.value,
                });
              }}
              value={user.email}
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
              name="user_password"
              onChange={(event) => {
                setUser({
                  ...user,
                  password: event.target.value,
                });
              }}
              value={user.password}
            />
          </div>
          <div className="mt-1.5">
            <label
              htmlFor="about"
              className="block text-xl font-medium text-gray-700"
            >
              About
            </label>
            <textarea
              id="about"
              className="w-full p-2.5 border-2 border-gray-300 rounded-md bg-white shadow-sm"
              name="user_about"
              onChange={(event) => {
                setUser({
                  ...user,
                  about: event.target.value,
                });
              }}
              value={user.about}
            />
          </div>
          <div className="mt-1.5">
            <label
              htmlFor="profileUrl"
              className="block text-xl font-medium text-gray-700"
            >
              Profile URL
            </label>
            <input
              type="text"
              id="profileUrl"
              className="w-full p-2.5 border-2 border-gray-300 rounded-md bg-white shadow-sm"
              name="user_profileUrl"
              onChange={(event) => {
                setUser({
                  ...user,
                  profileUrl: event.target.value,
                });
              }}
              value={user.profileUrl}
            />
          </div>

          <div className="flex space-x-5 items-center justify-center mt-4 pt-2 pb-2">
            <button
              className="bg-green-600 hover:bg-emerald-200 rounded-md px-4 py-2 text-white font-bold shadow-lg"
              onClick={handleSignUp}
            >
              Sign Up
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
// ankir
export default SignUp;
