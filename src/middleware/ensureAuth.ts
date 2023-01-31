import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensuerAuth(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("token missing");

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, "69c6e4a394b794ac45a4ca63761bff01");
    console.log("🚀 ~ file: ensureAuth.ts:17 ~ decoded", decoded);
  } catch (error) {
    throw new Error("Token invalid");
  }
}
