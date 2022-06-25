import { Router } from "express"
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository"
import { createCategoryController } from "../modules/cars/userCases/createCategory"

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

// Criação de categories. 
categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response))

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list()

  return response.json(all)
})

export { categoriesRoutes}