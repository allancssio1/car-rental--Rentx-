"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const CategoriesRepository_1 = require("../repositories/CategoriesRepository");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
const categoriesRepository = new CategoriesRepository_1.CategoriesRepository();
// Criação de categories. 
categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;
    categoriesRepository.create({ name, description });
    return response.status(201).send("inserido");
});
categoriesRoutes.get('/', (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all);
});
