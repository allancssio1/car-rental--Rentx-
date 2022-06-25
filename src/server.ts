import express from "express";
import { categoriesRoutes } from "./routes/Categories.routes";
import { specificationsRoutes } from "./routes/Specifications.routes";

const app = express()

app.use(express.json())
// O "/categories" será posto automaticamente em todas as rotas de dentro do categoriesRoutes
app.use("/categories", categoriesRoutes) 
app.use("/specifications", specificationsRoutes) 
app.listen(3333)