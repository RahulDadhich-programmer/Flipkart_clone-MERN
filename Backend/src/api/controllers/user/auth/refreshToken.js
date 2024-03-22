import express from "express";
import jwt from "jsonwebtoken";
import AuthService from "../../../../Services/authService.js";
import { UserModel } from "../../../../models/index.js";
import { successMessage, HttpStatusCode } from "../../../../index.js";
import {
  errorHandler,
  notFoundHandler,
} from "../../../middleware/errorMiddleware.js";

const authRouter = express.Router();
const authService = new AuthService(UserModel);

const refreshToken = async (req, res, next) => {
  try {
    const newAccessToken = jwt.sign(
      { _id: req.userId },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );
    res.status(HttpStatusCode.OK).json({
      message: successMessage("Refreshed Token"),
      accessToken: "newAccessToken",
      newAccessToken,
    });
  } catch (error) {
    next(error);
  }
};

authRouter.use(notFoundHandler);
authRouter.use(errorHandler);

export default refreshToken;
