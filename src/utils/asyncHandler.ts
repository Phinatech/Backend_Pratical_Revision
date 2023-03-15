import { NextFunction, Request, Response } from "express";

export const asynHandler =
  (fn: any) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

//why we are doing this is to avoid using  try and catch t create a parameter , if everything is fine run the next function
//asynchandler return function that holds a function
