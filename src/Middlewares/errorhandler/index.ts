import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../../utils/AppError";

const devError = (err: AppError, res: Response) => {
  return res.status(HttpCode.INTERAL_SERVER_ERROR).json({
    error: err,
    message: err.message,
    stack: err.stack,
    status: err.httpCode,
  });
};
export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  devError(err, res);
};
