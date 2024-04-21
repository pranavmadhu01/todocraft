import { prisma } from "../../init/prisma.init";
import { CreateUserBody } from "./user.schema";

export async function createUser(data: CreateUserBody & { pass_salt: string }) {
  const new_user = await prisma.user.create({
    data: {
      ...data,
    },
  });
  return new_user;
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      email: true,
      created_at: true,
    },
  });
  return user;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}
