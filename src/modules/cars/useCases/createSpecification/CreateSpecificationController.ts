import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    console.log("🚀 ~ description", description);
    console.log("🚀 ~ name", name);

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase,
    );
    await createSpecificationUseCase.execute({ name, description });

    return response.status(201).send("inserido");
  }
}

export { CreateSpecificationController };
