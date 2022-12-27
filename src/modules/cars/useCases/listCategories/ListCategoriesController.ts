import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUserCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = await container.resolve(
      ListCategoriesUseCase,
    );
    const all = await listCategoriesUseCase.execute();
    console.log(
      "🚀 ~ file: ListCategoriesController.ts:9 ~ ListCategoriesController ~ handle ~ all",
      all,
    );

    return response.json(all);
  }
}

export { ListCategoriesController };
