import { Request, Response, NextFunction } from "express";
import { IUser } from "../Interface/User.interface";
import userModel from "../model/user.model";
import { AppError, HttpCode } from "../utils/AppError";
import { asynHandler } from "../utils/asyncHandler";

export const register = asynHandler(
  async (req: Request<{}, {}, IUser>, res: Response, next: NextFunction) => {
    const { email, name, password, comfirmPassword } = req.body;

    const user = await userModel.create(email, name, password, comfirmPassword);
    if (!user) {
      next(
        new AppError({
          message: "Account is not created",
          httpCode: HttpCode.BAD_REQUEST,
        })
      );
    }
    return res.status(HttpCode.CREATED).json({
      message: "User is created",
      data: user,
    });
  }
);
