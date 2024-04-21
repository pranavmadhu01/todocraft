import { FastifyReply, FastifyRequest } from "fastify";
import { ByProjectIdParam, CreateProjectBody } from "./project.schema";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjectsByUserId,
  updateProject,
} from "./project.service";

export async function createProjectHandler(
  request: FastifyRequest<{ Body: CreateProjectBody }>,
  reply: FastifyReply
) {
  const data = request.body;
  const user_id = request.user.id;
  try {
    const new_project = await createProject(data, user_id);
    reply.status(201).send("Project created successfully");
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}

export async function getProjectsHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const user_id = request.user.id;
  try {
    const projects = await getProjectsByUserId(user_id);
    reply.send(projects);
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}

export async function getProjectByIdHandler(
  request: FastifyRequest<{ Params: ByProjectIdParam }>,
  reply: FastifyReply
) {
  const { project_id } = request.params;
  try {
    const project = await getProjectById(project_id);
    reply.send(project);
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}

export async function updateProjectHandler(
  request: FastifyRequest<{
    Body: CreateProjectBody;
    Params: ByProjectIdParam;
  }>,
  reply: FastifyReply
) {
  const { project_id } = request.params;
  const data = request.body;
  try {
    await updateProject(project_id, data);
    reply.send("Project updated successfully");
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}

export async function deleteProjectHandler(
  request: FastifyRequest<{ Params: ByProjectIdParam }>,
  reply: FastifyReply
) {
  const { project_id } = request.params;
  try {
    await deleteProject(project_id);
    reply.send("Project deleted successfully");
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}
