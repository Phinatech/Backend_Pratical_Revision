import { Router } from "express";
import { register } from "../controller/user.controller";
import { registerValidator } from "../Middlewares/validator/userValidator/userValidator";

const router = Router();

router.post("/register", registerValidator, register);

export default router;
