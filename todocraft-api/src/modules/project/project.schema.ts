import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createProjectBodySchema = z.object({
  title: z.string().min(1).max(255),
});

export const byProjectIdParamSchema = z.object({
  project_id: z.string().uuid(),
});

export const { schemas: projectSchemas, $ref: $projectRef } = buildJsonSchemas(
  {
    createProjectBodySchema,
    byProjectIdParamSchema,
  },
  {
    $id: "project",
  }
);

export type CreateProjectBody = z.infer<typeof createProjectBodySchema>;
export type ByProjectIdParam = z.infer<typeof byProjectIdParamSchema>;
