import { inject, injectable } from "tsyringe";
import { AppErrors } from "../../../../errors/AppErrors";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new AppErrors("Category already exists!", 401);
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
