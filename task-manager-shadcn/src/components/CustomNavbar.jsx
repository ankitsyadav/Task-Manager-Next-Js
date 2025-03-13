import React from "react";
import Link from "next/link";
import TaskSvg from "@/assets/task.svg";
import Image from "next/image";

const CustomNavbar = () => {
  return (
    <nav className="bg-blue-600 py-2 px-3 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl flex items-center space-x-2.5">
          <Image
            src={TaskSvg}
            alt="work manager"
            height={50}
            width={50}
          ></Image>
          <Link href="/">Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-6">
          <li className="hover:text-amber-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-amber-300">
            <Link href="/add-task">Add Task</Link>
          </li>
          <li className="hover:text-amber-300">
            <Link href="/show-tasks">Show Task</Link>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <ul className="flex space-x-5">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
