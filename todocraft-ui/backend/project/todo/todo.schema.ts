import { z } from "zod";

const createTodoBodySchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(255).optional(),
});

const updateTodoBodySchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(255).optional(),
  status: z.boolean().optional(),
});

export type CreateTodoBody = z.infer<typeof createTodoBodySchema>;
export type UpdateTodoBody = z.infer<typeof updateTodoBodySchema>;
