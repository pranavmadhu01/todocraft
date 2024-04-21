import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserBody, UserLoginBody } from "./user.schema";
import { createUser, getUserByEmail } from "./user.service";
import { hashPassword, verifyPassword } from "../../utils/auth";
import { fastify } from "../..";

export async function createUserHandler(
  request: FastifyRequest<{ Body: CreateUserBody }>,
  reply: FastifyReply
) {
  const data = request.body;
  try {
    const existing_user = await getUserByEmail(data.email);
    if (existing_user) {
      reply.code(400).send({ message: "User already exists" });
    } else {
      const { hash, salt } = hashPassword(data.password);
      const new_user = await createUser({
        ...data,
        password: hash,
        pass_salt: salt,
      });
      reply.code(201).send(new_user);
    }
  } catch (error) {
    reply.code(500).send({ message: "Internal Server Error" });
  }
}

export async function userLoginHandler(
  request: FastifyRequest<{ Body: UserLoginBody }>,
  reply: FastifyReply
) {
  const data = request.body;
  try {
    const existing_user = await getUserByEmail(data.email);
    if (!existing_user) {
      reply.code(400).send({ message: "User does not exist" });
    } else {
      const { password, pass_salt } = existing_user;
      const isPasswordValid = verifyPassword(
        data.password,
        pass_salt,
        password
      );
      if (!isPasswordValid) {
        reply.code(401).send({ message: "Invalid password" });
      } else {
        const { password, pass_salt, ...otherUserData } = existing_user;
        const accessToken = fastify.jwt.sign(otherUserData);
        reply.setCookie("access_token", accessToken, {
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "none",
        });
        reply.code(200).send({ accessToken });
      }
    }
  } catch (error) {
    reply.code(500).send({ message: "Internal Server Error" });
  }
}

export async function getUserHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const user = request.user;
  reply.code(200).send(user);
}
