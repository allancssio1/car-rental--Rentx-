import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    console.log("chamou => ImportCategoryController ");
    const { file } = request;
    console.log(
      "🚀 ~ file: ImportCategoryController.ts:9 ~ ImportCategoryController ~ handle ~ file",
      file,
    );
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    await importCategoryUseCase.execute(file);
    return response.send("arquivo cadastrado");
  }
}

export { ImportCategoryController };
