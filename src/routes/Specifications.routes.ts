import { Router } from "express";
import { ensuerAuth } from "../middleware/ensureAuth";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

// specificationsRoutes.use(ensuerAuth);
console.log("rotas");
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
