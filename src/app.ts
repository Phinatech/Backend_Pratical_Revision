import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./Middlewares/errorhandler";
import { AppError, HttpCode } from "./utils/AppError";

export const appConfig = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))
    // check for not found route
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppError({
          message: `this route ${req.originalUrl} does not exist`,
          httpCode: HttpCode.NOT_FOUND,
        })
      );
    })

    //Error handling : this is used to
    .use(errorHandler);
};
