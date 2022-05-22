"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Categories_routes_1 = require("./routes/Categories.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// O "/categories" será posto automaticamente em todas as rotas de dentro do categoriesRoutes
app.use("/categories", Categories_routes_1.categoriesRoutes);
app.listen(3333);
