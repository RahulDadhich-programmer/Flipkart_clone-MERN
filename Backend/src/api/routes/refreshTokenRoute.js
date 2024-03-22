import express from "express";
import { refreshToken } from "../controllers/index.js";
import { validateRefreshToken } from "../middleware/index.js";
const authrouter = express.Router();

authrouter.post("/refresh", validateRefreshToken, refreshToken);

export default authrouter;
