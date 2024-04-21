import { z } from "zod";
import { byProjectIdParamSchema } from "../project.schema";
import { buildJsonSchemas } from "fastify-zod";

const createTodoBodySchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(255).optional(),
});

const updateTodoBodySchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(255).optional(),
  status: z.boolean().optional(),
});

const byTodoIdParamSchema = byProjectIdParamSchema.extend({
  todo_id: z.string().uuid().optional(),
});

export const { schemas: todoSchemas, $ref: $todoRef } = buildJsonSchemas(
  {
    createTodoBodySchema,
    updateTodoBodySchema,
    byTodoIdParamSchema,
  },
  {
    $id: "todo",
  }
);

export type CreateTodoBody = z.infer<typeof createTodoBodySchema>;
export type UpdateTodoBody = z.infer<typeof updateTodoBodySchema>;
export type ByTodoIdParam = z.infer<typeof byTodoIdParamSchema>;
