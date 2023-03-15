import { RequestHandler } from "express";
import { validator } from "../validator";
import { userSchema } from "./userSchema";

//validato is expecting three parameter
export const registerValidator: RequestHandler = (req, res, next) =>
  validator(userSchema.register, req.body, next);

export const loginValidator: RequestHandler = (req, res, next) =>
  validator(userSchema.login, req.body, next);
