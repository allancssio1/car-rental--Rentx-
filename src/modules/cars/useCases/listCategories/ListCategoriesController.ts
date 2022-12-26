import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUserCase";

class ListCategoriesController {
  handle(request: Request, response: Response): Response {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const all = listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
