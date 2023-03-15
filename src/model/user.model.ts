import { Schema, model } from "mongoose";
import { IUser } from "../Interface/User.interface";
import isEmail from "validator/lib/isEmail";

const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: [true, "please enter your name"] },
    email: {
      type: String,
      required: [true, "please enter your email"],
      validate: [isEmail, "Please enter a valid email"],
      lowercase: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Please enter a correct password"],
    },
    comfirmPassword: {
      type: String,
      required: [true, "Please enter a correct password"],
    },

    role: {
      enum: ["user", "admin", "manage"],
      default: "user",
      message: "You must either be a user,an admin or manger",
    },
  },
  { timestamps: true }
);
const userModel = model<IUser>("User", UserSchema);
export default userModel;
