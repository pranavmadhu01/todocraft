import { axiosInstance } from "..";
import { UserLoginBody, CreateUserBody } from "./user.schema";
const USER_BASE_PATH = "/user";

export async function createUser(data: CreateUserBody) {
  return await axiosInstance.post(USER_BASE_PATH, data);
}

export async function loginUser(data: UserLoginBody) {
  return await axiosInstance.post(`${USER_BASE_PATH}/login`, data);
}

export async function getUser() {
  return (await axiosInstance.get(USER_BASE_PATH)).data as User;
}
