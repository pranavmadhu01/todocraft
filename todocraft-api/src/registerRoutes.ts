import { FastifyInstance } from "fastify";
import { userSchemas } from "./modules/user/user.schema";
import { userRoutes } from "./modules/user/user.route";
import { projectSchemas } from "./modules/project/project.schema";
import { projectRoutes } from "./modules/project/project.routes";

export async function registerRoutes(server: FastifyInstance) {
  const modules = [userSchemas, projectSchemas];
  for (const module of modules) {
    for (const schema of module) {
      server.addSchema(schema);
    }
  }

  server.register(userRoutes, { prefix: "/api/user" });
  server.register(projectRoutes, { prefix: "/api/project" });
}
