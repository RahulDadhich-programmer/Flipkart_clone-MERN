import express from "express";
import { login, signup } from "../controllers/index.js";

const router = express.Router();
// login route
router.post("/login", login);
// signUp route
router.post("/signup", signup);

export default router;
