import express from "express";
import { categoriesRoutes } from "./routes/Categories.routes";

const app = express()

app.use(express.json())
// O "/categories" será posto automaticamente em todas as rotas de dentro do categoriesRoutes
app.use("/categories", categoriesRoutes) 
app.listen(3333)