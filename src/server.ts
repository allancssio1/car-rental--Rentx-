import express from "express";
import { router } from "./routes";
import multer from "multer";

const app = express()

app.use(express.json())
app.use(router)

app.listen(3333)