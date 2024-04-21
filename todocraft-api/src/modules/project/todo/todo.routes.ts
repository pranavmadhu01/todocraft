import { FastifyInstance } from "fastify";
import { $todoRef } from "./todo.schema";
import {
  createTodoHandler,
  deleteTodoHandler,
  getTodoByIdHandler,
  getTodosHandler,
  updateTodoHandler,
} from "./todo.controller";

export async function todoRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      schema: {
        body: $todoRef("createTodoBodySchema"),
        params: $todoRef("byTodoIdParamSchema"),
      },
    },
    createTodoHandler
  );

  server.get("/", getTodosHandler);

  server.get(
    "/:todo_id",
    { schema: { params: $todoRef("byTodoIdParamSchema") } },
    getTodoByIdHandler
  );

  server.patch(
    "/:todo_id",
    {
      schema: {
        body: $todoRef("updateTodoBodySchema"),
        params: $todoRef("byTodoIdParamSchema"),
      },
    },
    updateTodoHandler
  );

  server.delete(
    "/:todo_id",
    { schema: { params: $todoRef("byTodoIdParamSchema") } },
    deleteTodoHandler
  );
}
