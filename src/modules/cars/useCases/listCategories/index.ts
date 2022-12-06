import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUserCase";

// const categoriesRepository = new CategoriesRepository();
export default (): ListCategoriesController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoreisUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoreisUseCase,
  );

  return listCategoriesController;
};
