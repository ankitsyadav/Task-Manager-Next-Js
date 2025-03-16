import { httpAxios } from "@/helper/httpHelper";
export async function addTask(task) {
  try {
    const res = await httpAxios.post("/api/tasks", task);
    return res.data;
  } catch (error) {
    console.error("Failed to add task:", error);
    throw error;
  }
}

export async function getTaskOfUser(userid) {
  try {
    const res = await httpAxios.get(`/api/users/${userid}/tasks`);
    return res.data;
  } catch (error) {
    console.error("Failed to get tasks of user:", error);
    throw error;
  }
}
