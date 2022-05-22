"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const CategoriesRepository_1 = require("../repositories/CategoriesRepository");
const CreateCategoryService_1 = require("../services/CreateCategoryService");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
const categoriesRepository = new CategoriesRepository_1.CategoriesRepository();
// Criação de categories. 
categoriesRoutes.post('/', (request, response) => {
    console.log('manj');
    const { name, description } = request.body;
    console.log('veio aqui 3', name);
    const createCategoryService = new CreateCategoryService_1.CreateCategoryService(categoriesRepository);
    createCategoryService.execute({ name, description });
    return response.status(201).send("inserido");
});
categoriesRoutes.get('/', (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all);
});
