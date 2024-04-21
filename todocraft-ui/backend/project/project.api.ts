import { axiosInstance } from "..";
import { CreateProjectBody } from "./project.schema";

export const PROJECT_BASE_PATH = "/project";

export async function createProject(data: CreateProjectBody) {
  return await axiosInstance.post(PROJECT_BASE_PATH, data);
}

export async function getProjects() {
  return (await axiosInstance.get(PROJECT_BASE_PATH)).data as Project[];
}

export async function getProjectById(project_id: string) {
  return (await axiosInstance.get(`${PROJECT_BASE_PATH}/${project_id}`))
    .data as ProjectWithTodo;
}

export async function updateProject(
  project_id: string,
  data: CreateProjectBody
) {
  return await axiosInstance.patch(`${PROJECT_BASE_PATH}/${project_id}`, data);
}

export async function deleteProject(project_id: string) {
  return await axiosInstance.delete(`${PROJECT_BASE_PATH}/${project_id}`);
}
