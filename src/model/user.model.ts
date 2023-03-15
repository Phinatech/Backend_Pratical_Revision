import { Schema, model } from "mongoose";
import { IUser } from "../Interface/User.interface";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";

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
      type: String,
      enum: ["user", "admin", "manage"],
      default: "user",
      message: "You must either be a user,an admin or manger",
    },
  },
  { timestamps: true }
);

//this is a copy of the username or making referance to it
UserSchema.pre("save", async function (next) {
  let user = this;
  if (!user.isModified("password")) next();
  const salt = await bcrypt.genSalt(12);
  user.password = await bcrypt.hash(user.password, salt);
  user.comfirmPassword = user.password;
  next();
});

const userModel = model<IUser>("User", UserSchema);
export default userModel;
