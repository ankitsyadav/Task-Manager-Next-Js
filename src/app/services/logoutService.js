import { httpAxios } from "@/helper/httpHelper";
export async function logoutService() {
  return await httpAxios.post("/api/logout").then((res) => res.data);
}
