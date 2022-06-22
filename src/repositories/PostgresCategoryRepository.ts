import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class PostgresCategoryRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name)
    throw new Error('findByName')
  }
  list(): Category[] {
    console.log()
    throw new Error('list')
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description)
    throw new Error('create')
  }
}

export { PostgresCategoryRepository }