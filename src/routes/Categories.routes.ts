import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import listCategoriesController from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

// Criação de categories.
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
// listagem das categorias;
categoriesRoutes.get("/", (request, response) =>
  listCategoriesController().handle(request, response),
);
categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle,
);

export { categoriesRoutes };
