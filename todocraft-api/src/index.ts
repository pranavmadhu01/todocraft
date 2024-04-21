import Fastify from "fastify";
import cors from "@fastify/cors";
import fjwt from "@fastify/jwt";
import formDataPlugin from "@fastify/formbody";
import { registerRoutes } from "./registerRoutes";
import { envConstants } from "./constants/env.constants";
import { jwtDecorateCallback } from "./utils/auth";
export const fastify = Fastify({
  logger: true,
});
//CORS setup
fastify.register(cors, {
  origin: envConstants.WEBSITE_DOMAIN,
});
//JWT setup
fastify
  .register(fjwt, {
    secret: envConstants.JWT_SECRET,
  })
  .decorate("authenticate", jwtDecorateCallback);
//test route
fastify.get("/ping", function (request, reply) {
  reply.send("pong");
});
//routes registration
registerRoutes(fastify);
//starting the server
(async () => {
  await fastify.register(formDataPlugin);
  fastify.listen({ port: 3001, host: "0.0.0.0" }, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
})();
