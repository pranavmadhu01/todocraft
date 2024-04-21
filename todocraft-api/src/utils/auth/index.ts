import crypto from "crypto";
import { FastifyReply, FastifyRequest } from "fastify";

function getSalt() {
  return crypto.randomBytes(20).toString("hex");
}
export function hashPassword(password: string) {
  const salt = getSalt();
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return {
    salt,
    hash,
  };
}

export function verifyPassword(
  candidate_pass: string,
  salt: string,
  hash: string
) {
  const verifyCandidateHash = crypto.pbkdf2Sync(
    candidate_pass,
    salt,
    1000,
    64,
    "sha512"
  );
  return hash === verifyCandidateHash.toString("hex");
}

export async function jwtDecorateCallback(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();
  } catch (error) {
    reply.code(500).send({ message: "Internal Server Error", error });
  }
}
