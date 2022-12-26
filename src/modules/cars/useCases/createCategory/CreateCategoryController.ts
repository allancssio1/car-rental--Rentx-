import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createCategoryUserCase = container.resolve(CreateCategoryUseCase);
    console.log("o name aqui 1111 =>", name);
    await createCategoryUserCase.execute({ name, description });

    return response.status(201).send("inserido");
  }
}

export { CreateCategoryController };
