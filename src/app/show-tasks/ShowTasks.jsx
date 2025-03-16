"use client";
import React, { useState, useEffect, useContext } from "react";
import { getTaskOfUser } from "../services/taskService";
import UserContext from "@/context/userContext";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);

  useEffect(() => {
    const fetchTasks = async () => {
      const userTasks = await getTaskOfUser(context.user._id);
      setTasks(userTasks);
    };
    fetchTasks();
  }, [context]);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-row justify-between items-center"
        >
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900">{task.title}</h3>
            <p className="text-gray-600">{task.desc}</p>
            <p className="text-gray-600">Status: {task.status}</p>
          </div>
          <div className="flex flex-row items-center">
            <select className="py-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            <button className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-5 5m-5 -5v-2a2 2 0 00-2 2H5a2 2 0 002 2v3a2 2 0 002 2h11a2 2 0 002-2v-3a2 2 0 00-2-2h-2"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTasks;
