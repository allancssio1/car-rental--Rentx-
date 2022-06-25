import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  constructor (private createCategoryUserCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body

    this.createCategoryUserCase.execute({name, description})
    console.log('mnauuuuu')
    return response.status(201).send("inserido")
  }
}

export {CreateCategoryController}