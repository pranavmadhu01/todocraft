import { axiosInstance } from "@/backend";
import { CreateTodoBody } from "./todo.schema";
import { PROJECT_BASE_PATH } from "../project.api";

export async function createTodo(project_id: string, data: CreateTodoBody) {
  return await axiosInstance.post(
    `${PROJECT_BASE_PATH}/${project_id}/todo`,
    data
  );
}

export async function getTodos(project_id: string) {
  return (await axiosInstance.get(`${PROJECT_BASE_PATH}/${project_id}/todo`))
    .data;
}

export async function getTodoById(project_id: string, todo_id: string) {
  return (
    await axiosInstance.get(
      `${PROJECT_BASE_PATH}/${project_id}/todo/${todo_id}`
    )
  ).data;
}

export async function updateTodo(
  project_id: string,
  todo_id: string,
  data: CreateTodoBody
) {
  return await axiosInstance.patch(
    `${PROJECT_BASE_PATH}/${project_id}/todo/${todo_id}`,
    data
  );
}

export async function deleteTodo(project_id: string, todo_id: string) {
  return await axiosInstance.delete(
    `${PROJECT_BASE_PATH}/${project_id}/todo/${todo_id}`
  );
}
