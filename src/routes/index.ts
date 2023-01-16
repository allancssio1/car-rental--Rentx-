import { Router } from "express";
import { authRoutes } from "./Auth.routes";
import { categoriesRoutes } from "./Categories.routes";
import { specificationsRoutes } from "./Specifications.routes";
import { usersRoutes } from "./Users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use(authRoutes);

export { router };
