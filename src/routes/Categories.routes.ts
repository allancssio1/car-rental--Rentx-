import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import importCategoryController from "../modules/cars/useCases/importCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});
// Criação de categories.
const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
// listagem das categorias;
categoriesRoutes.get("/", (request, response) =>
  listCategoriesController().handle(request, response),
);
categoriesRoutes.post("/import", upload.single("file"), (request, response) =>
  importCategoryController().handle(request, response),
);

export { categoriesRoutes };
