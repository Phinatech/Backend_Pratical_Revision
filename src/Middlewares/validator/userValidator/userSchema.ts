import Joi from "joi";

export const userSchema = {
  register: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    comfirmPassword: Joi.string().valid(Joi.ref("password")),
  }),
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
};
