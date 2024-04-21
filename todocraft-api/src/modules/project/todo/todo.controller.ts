import { FastifyReply, FastifyRequest } from "fastify";
import { ByTodoIdParam, CreateTodoBody, UpdateTodoBody } from "./todo.schema";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodosByProjectId,
  updateTodo,
} from "./todo.service";

export async function createTodoHandler(
  request: FastifyRequest<{ Body: CreateTodoBody; Params: ByTodoIdParam }>,
  reply: FastifyReply
) {
  const data = request.body;
  const { project_id } = request.params;
  try {
    const new_todo = await createTodo(data, project_id);
    reply.status(201).send("Todo created successfully");
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}

export async function getTodosHandler(
  request: FastifyRequest<{ Params: ByTodoIdParam }>,
  reply: FastifyReply
) {
  const { project_id } = request.params;
  try {
    const todos = await getTodosByProjectId(project_id);
    reply.status(200).send(todos);
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}

export async function getTodoByIdHandler(
  request: FastifyRequest<{ Params: ByTodoIdParam }>,
  reply: FastifyReply
) {
  const { todo_id } = request.params;
  try {
    if (!todo_id) return reply.status(400).send("Todo ID is required");
    const todo = await getTodoById(todo_id);
    reply.send(todo);
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}

export async function updateTodoHandler(
  request: FastifyRequest<{ Body: UpdateTodoBody; Params: ByTodoIdParam }>,
  reply: FastifyReply
) {
  const data = request.body;
  const { todo_id } = request.params;
  try {
    if (!todo_id) return reply.status(400).send("Todo ID is required");
    const updated_todo = await updateTodo(todo_id, data);
    reply.send("Todo updated successfully");
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}

export async function deleteTodoHandler(
  request: FastifyRequest<{ Params: ByTodoIdParam }>,
  reply: FastifyReply
) {
  const { todo_id } = request.params;
  try {
    if (!todo_id) return reply.status(400).send("Todo ID is required");
    await deleteTodo(todo_id);
    reply.send("Todo deleted successfully");
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}
