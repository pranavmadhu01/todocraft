import { prisma } from "../../init/prisma.init";
import { CreateProjectBody } from "./project.schema";

export async function createProject(data: CreateProjectBody, user_id: string) {
  const new_project = await prisma.project.create({
    data: {
      ...data,
      user_id,
    },
  });
  return new_project;
}

export async function getProjectsByUserId(user_id: string) {
  const projects = await prisma.project.findMany({
    where: {
      user_id,
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      _count: {
        select: { todo: true },
      },
    },
  });
  return projects.map((project) => ({
    id: project.id,
    title: project.title,
    created_at: project.created_at,
    updated_at: project.updated_at,
    todo_count: project?._count?.todo ?? 0,
  }));
}

export async function getProjectById(project_id: string) {
  let result = {};
  const project = await prisma.project.findUnique({
    where: {
      id: project_id,
    },
    include: {
      _count: {
        select: { todo: { where: { status: true } } },
      },
      todo: {
        orderBy: {
          updated_at: "desc",
        },
      },
    },
  });
  if (project) {
    result = {
      id: project.id,
      title: project.title,
      created_at: project.created_at,
      updated_at: project.updated_at,
      completed_todo_count: project?._count?.todo ?? 0,
      todos: project.todo,
    };
  }
  return result;
}

export async function updateProject(
  project_id: string,
  data: CreateProjectBody
) {
  const updated_project = await prisma.project.update({
    where: {
      id: project_id,
    },
    data,
  });
  return updated_project;
}

export async function deleteProject(project_id: string) {
  const deleted_project = await prisma.project.delete({
    where: {
      id: project_id,
    },
  });
  return deleted_project;
}
