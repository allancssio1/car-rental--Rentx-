"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
class CreateCategoryService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    execute({ name, description }) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        console.log("veio aqui 2");
        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }
        // return response.status(400).json({error: "Categoria já existe."})
        this.categoriesRepository.create({ name, description });
    }
}
exports.CreateCategoryService = CreateCategoryService;
