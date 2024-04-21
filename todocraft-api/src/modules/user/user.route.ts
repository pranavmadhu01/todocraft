import { FastifyInstance } from "fastify";
import { $userRef } from "./user.schema";
import {
  createUserHandler,
  getUserHandler,
  userLoginHandler,
} from "./user.controller";

export async function userRoutes(server: FastifyInstance) {
  server.post(
    "/",
    { schema: { body: $userRef("createUserBodySchema") } },
    createUserHandler
  );

  server.post(
    "/login",
    { schema: { body: $userRef("userLoginSchema") } },
    userLoginHandler
  );

  server.get("/", { preHandler: [server.authenticate] }, getUserHandler);
}
