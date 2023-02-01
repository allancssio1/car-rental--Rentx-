import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import "./database";
import "./shared/container";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { AppErrors } from "./errors/AppErrors";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err) {
      if (err instanceof AppErrors)
        return response.status(err.code).json({ message: err.message });

      return response
        .status(500)
        .json({ message: `Internal server error - ${err.message}` });
    } else {
      next();
    }
  },
);

app.listen(3333, () => console.log("Server Running"));
