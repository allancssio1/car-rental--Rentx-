import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authentication/authuser/AuthenticateUserController";

const authRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

authRoutes.post("/sessions", authenticateUserController.handle);

export { authRoutes };
