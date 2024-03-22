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

const signup = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password, phone } = req.body;

    const newUser = await authService.registerUser(
      firstName,
      lastName,
      userName,
      email,
      password,
      phone
    );

    const tokens = await authService.generateToken(newUser);

    res
      .status(HttpStatusCode.OK)
      .json({ message: successMessage("Signup"), user: newUser, tokens });
  } catch (error) {
    res
      .status(HttpStatusCode.DUPLICATE_ENTRY)
      .json({ message: errorMessage.duplicateEntry });
  }
};

authRouter.use(notFoundHandler);
authRouter.use(errorHandler);

export default signup;
