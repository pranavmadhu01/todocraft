import { prisma } from "../../../init/prisma.init";
import { CreateTodoBody, UpdateTodoBody } from "./todo.schema";

export async function createTodo(data: CreateTodoBody, project_id: string) {
  const new_todo = await prisma.todo.create({
    data: {
      ...data,
      project_id,
    },
  });
  return new_todo;
}

export async function getTodosByProjectId(project_id: string) {
  const todos = await prisma.todo.findMany({
    where: {
      project_id,
    },
  });
  return todos;
}

export async function getTodoById(todo_id: string) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: todo_id,
    },
  });
  return todo;
}

export async function updateTodo(todo_id: string, data: UpdateTodoBody) {
  const updated_todo = await prisma.todo.update({
    where: {
      id: todo_id,
    },
    data,
  });
  return updated_todo;
}

export async function deleteTodo(todo_id: string) {
  const deleted_todo = await prisma.todo.delete({
    where: {
      id: todo_id,
    },
  });
  return deleted_todo;
}
