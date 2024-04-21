import { FastifyInstance } from "fastify";
import { $projectRef } from "./project.schema";
import {
  createProjectHandler,
  deleteProjectHandler,
  getProjectByIdHandler,
  getProjectsHandler,
  updateProjectHandler,
} from "./project.controller";
import { todoSchemas } from "./todo/todo.schema";
import { todoRoutes } from "./todo/todo.routes";

export async function projectRoutes(server: FastifyInstance) {
  server.addHook("preHandler", server.authenticate);

  const modules = [todoSchemas];
  for (const module of modules) {
    for (const schema of module) {
      server.addSchema(schema);
    }
  }
  server.register(todoRoutes, { prefix: "/:project_id/todo" });

  server.post(
    "/",
    { schema: { body: $projectRef("createProjectBodySchema") } },
    createProjectHandler
  );

  server.get("/", getProjectsHandler);

  server.get(
    "/:project_id",
    { schema: { params: $projectRef("byProjectIdParamSchema") } },
    getProjectByIdHandler
  );

  server.patch(
    "/:project_id",
    {
      schema: {
        body: $projectRef("createProjectBodySchema"),
        params: $projectRef("byProjectIdParamSchema"),
      },
    },
    updateProjectHandler
  );

  server.delete(
    "/:project_id",
    { schema: { params: $projectRef("byProjectIdParamSchema") } },
    deleteProjectHandler
  );
}
