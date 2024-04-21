import { z } from "zod";

const createProjectBodySchema = z.object({
  title: z.string().min(1).max(255),
});

export type CreateProjectBody = z.infer<typeof createProjectBodySchema>;
