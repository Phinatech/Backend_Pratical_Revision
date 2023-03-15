import joi from "joi";
import { NextFunction } from "express";
import { AppError, HttpCode } from "../../utils/AppError";

export const validator = (
  schemaName: joi.ObjectSchema,
  body: object,
  next: NextFunction
) => {
  const value = schemaName.validate(body, {
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
  });

  try {
    value.error
      ? next(
          new AppError({
            httpCode: HttpCode.UNPROCESSEDABLE_IDENTITY,
            message: value.error.details[0].message,
          })
        )
      : next();
  } catch (error) {
    next(
      new AppError({
        httpCode: HttpCode.UNPROCESSEDABLE_IDENTITY,
        message: error,
      })
    );
  }
};
