"use client";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import TaskSvg from "@/assets/task.svg";
import Image from "next/image";
import UserContext from "@/context/userContext";
import { logoutService } from "@/app/services/logoutService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CustomNavbar = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutService();
      setUser(undefined);
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <nav className="bg-blue-600 py-2 px-3 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl flex items-center space-x-2.5">
          <Image src={TaskSvg} alt="work manager" height={50} width={50} />
          <Link href="/">Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-6">
          {user && (
            <>
              <li className="hover:text-amber-300">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-amber-300">
                <Link href="/add-task">Add Task</Link>
              </li>
              <li className="hover:text-amber-300">
                <Link href="/show-tasks">Show Task</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-5">
          {user ? (
            <>
              <li>
                <Link href={"#!"}>{user.name}</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
