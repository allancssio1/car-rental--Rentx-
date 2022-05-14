import { Router } from "express"
import { CategoriesRepository } from "../repositories/CategoriesRepository"

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

// Criação de categories. 
categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body
  const categoryAlreadyExists = categoriesRepository.findByName(name)

  if(categoryAlreadyExists) return response.status(400).json({error: "Categoria já existe."})
  
  categoriesRepository.create({name, description})

  return response.status(201).send("inserido")
})

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list()

  return response.json(all)
})

export { categoriesRoutes}