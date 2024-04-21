import { FastifyInstance } from "fastify/types/instance";

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any;
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
