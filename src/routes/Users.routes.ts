import { Router } from "express";
import multer from "multer";
import upload from "../config/upload";
import { ensuerAuth } from "../middleware/ensureAuth";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateuserAvatarController";

const usersRoutes = Router();
const uploadAvatar = multer(upload.upload("./tmp/avatar"));
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
  "/",
  ensuerAuth,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle,
);

export { usersRoutes };
