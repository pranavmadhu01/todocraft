import { FastifyInstance } from "fastify/types/instance";
import { FastifyRequest } from "fastify/types/request";
import { JWT } from "@fastify/jwt";

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any;
  }
  interface FastifyRequest {
    jwt: JWT;
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: {
      id: string;
      created_at: string;
      name: string;
      email: string;
    };
  }
}
