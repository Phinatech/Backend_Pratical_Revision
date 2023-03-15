import { Router } from "express";
import homeRoute from "../routes/home.route";
import authRoute from "../routes/auth.route";

const router = Router();

router.get("/", homeRoute);
router.post("/auth", authRoute);

export default router;
