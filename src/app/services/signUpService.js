import { httpAxios } from "@/helper/httpHelper";
export async function addUser(user) {
  const res = await httpAxios.post("/api/users", user).then((res) => res.data);
  return res;
}
