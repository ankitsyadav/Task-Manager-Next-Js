import { httpAxios } from "@/helper/httpHelper";
export async function loginService(loginData) {
  const res = await httpAxios
    .post("/api/login", loginData)
    .then((res) => res.data);
  return res;
}
