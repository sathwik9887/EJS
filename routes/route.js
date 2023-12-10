import express from "express";
import { homeController } from "../controllers/homeController";
import { aboutController } from "../controllers/aboutController";

const router = express.router();

router.get("/", homeController);
router.get("/about", aboutController);

export default router;
