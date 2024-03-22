import express from "express";
import AuthService from "../../../../Services/authService.js";
import { UserModel } from "../../../../models/index.js";
import {
  successMessage,
  errorMessage,
  HttpStatusCode,
} from "../../../../index.js";
import {
  errorHandler,
  notFoundHandler,
} from "../../../middleware/errorMiddleware.js";
const authRouter = express.Router();
const authService = new AuthService(UserModel);

const login = async (req, res) => {
  try {
    const { loginIdentifier, password } = req.body;
    const user = await authService.loginUser(loginIdentifier, password);
    const tokens = await authService.generateToken(user);
    res
      .status(HttpStatusCode.OK)
      .json({ message: successMessage("Login"), user, tokens });
  } catch (error) {
    res
      .status(HttpStatusCode.UNAUTHORIZED)
      .json({ message: errorMessage.notvalidUser });
  }
};

authRouter.use(notFoundHandler);
authRouter.use(errorHandler);
export default login;
