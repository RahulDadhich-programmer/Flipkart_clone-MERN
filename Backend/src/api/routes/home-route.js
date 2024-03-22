import express from "express";

import { getFooter } from "../controllers/footerContoller.js";
import { homeController } from "../controllers/homeContoller.js";

const router = express.Router();

router.get("/home", homeController);
router.get("/footer", getFooter);
export default router;
