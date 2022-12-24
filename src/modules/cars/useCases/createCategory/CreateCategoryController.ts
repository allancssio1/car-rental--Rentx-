import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    console.log("controller antes do container resolve");
    const createCategoryUserCase = container.resolve(CreateCategoryUseCase);
    console.log("controller depois do container resolve");

    await createCategoryUserCase.execute({ name, description });

    return response.status(201).send("inserido");
  }
}

export { CreateCategoryController };
