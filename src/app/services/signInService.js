import { httpAxios } from "@/helper/httpHelper";
export async function loginService(loginData) {
  return await httpAxios.post("/api/login", loginData).then((res) => res.data);
}
export async function currentUserService() {
  return await httpAxios.get("/api/current").then((res) => res.data);
}
