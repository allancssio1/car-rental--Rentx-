import { Router } from "express"
import { createCategoryController } from "../modules/cars/useCases/createCategory"
import { listCategoriesController } from "../modules/cars/useCases/listCategories"

const categoriesRoutes = Router()
// Criação de categories. 
categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response))
// listagem das categorias;
categoriesRoutes.get('/', (request, response) => listCategoriesController.handle(request, response))

export { categoriesRoutes}