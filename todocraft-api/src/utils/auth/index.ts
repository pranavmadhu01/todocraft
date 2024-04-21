import { FastifyJWT } from "@fastify/jwt";
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

export async function cookieDecorateCallback(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const accessToken = request.cookies.access_token;
    if (!accessToken) {
      return reply.status(401).send({ message: "Authentication required" });
    }
    const decoded = request.jwt.verify<FastifyJWT["user"]>(accessToken);
    request.user = decoded;
  } catch (error) {
    reply.code(500).send({ message: "Internal Server Error", error });
  }
}
