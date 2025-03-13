import { httpAxios } from "@/helper/httpHelper";
export async function addTask(task) {
  const res = await httpAxios.post("/api/tasks", task).then((res) => res.data);
  return res;
}
