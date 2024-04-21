import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createUserBodySchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(6).max(255),
});

const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
});

export const { schemas: userSchemas, $ref: $userRef } = buildJsonSchemas(
  {
    createUserBodySchema,
    userLoginSchema,
  },
  {
    $id: "user",
  }
);

export type CreateUserBody = z.infer<typeof createUserBodySchema>;
export type UserLoginBody = z.infer<typeof userLoginSchema>;
