import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({
      message: " welcome home set 06 💋👏🌹🌹",
    });
  } catch (error) {
    next(error);
  }
});
export default router;
