"use client";
import React, { useState } from "react";
import addtask from "@/assets/addtask.svg";
import Image from "next/image";
import { addTask } from "../services/taskService";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    desc: "",
    userId: "67c2c7b018b95b54d6f616ff",
  });

  const handleAddTask = () => {
    console.log(task);

    try {
      const res = addTask(task);
      toast.success("Your Task Added Success Fully", {
        position: "bottom-right",
      });
      setTask({
        title: "",
        desc: "",
        userId: "67c2c7b018b95b54d6f616ff",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearTask = () => {
    setTask({
      title: "",
      desc: "",
      userId: "67c2c7b018b95b54d6f616ff",
    });
  };

  return (
    <div className="grid grid-cols-12 justify-center bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className="col-span-6 col-start-4 justify-center p-4 rounded-lg shadow-lg bg-white">
        <div className="flex justify-center items-center mt-2">
          <Image
            src={addtask}
            alt="img logo"
            width={300}
            className="rounded-lg"
          ></Image>
        </div>
        <div className="flex justify-center mt-1.5">
          <h1 className="text-3xl font-bold text-gray-800">
            Add Your Task Here
          </h1>
        </div>

        <form action="#!" className="mt-4">
          <div className="mt-1.5">
            <label
              htmlFor="task_title"
              className="block text-xl font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="task_title"
              className="w-full p-2.5 border-2 border-gray-300 rounded-md bg-white shadow-sm"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          <div className="mt-1.5">
            <label
              htmlFor="task_desc"
              className="block text-xl font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="task_desc"
              className="w-full p-2.5 border-2 border-gray-300 rounded-md bg-white shadow-sm"
              name="task_desc"
              onChange={(event) => {
                setTask({
                  ...task,
                  desc: event.target.value,
                });
              }}
              value={task.desc}
            />
          </div>
          <div className="flex space-x-5 items-center justify-center mt-4 pt-2 pb-2">
            <button
              onClick={handleAddTask}
              className="bg-green-600 hover:bg-emerald-200 rounded-md px-4 py-2 text-white font-bold shadow-lg"
            >
              Add task
            </button>
            <button
              onClick={handleClearTask}
              className="bg-red-500 hover:bg-emerald-200 rounded-md px-4 py-2 text-white font-bold shadow-lg"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
