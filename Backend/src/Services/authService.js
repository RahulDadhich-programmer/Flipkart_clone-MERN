import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userSchema } from "../Validation/userSchemaValidate.js";
import { UserModel } from "../models/index.js";
import { JoiValidationError } from "../api/middleware/customError.js";
import {
  ExistUser,
  findUserByLoginIdentifier,
} from "../Services/userService.js";
import {
  verify_refreshToken,
  generateTokens,
} from "../Services/tokenService.js";
import { errorMessage, successMessage } from "../index.js";

class AuthService {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }

  async registerUser(firstName, lastName, userName, email, password, phone) {
    try {
      const loginIdentifier = email || phone;
      const { error } = userSchema.validate({
        firstName,
        lastName,
        userName,
        email,
        password,
        phone,
        loginIdentifier,
      });
      if (error) {
        throw new JoiValidationError(error.details[0].message);
      }
      const UserExisting = ExistUser(email);

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({
        firstName,
        lastName,
        userName,
        email,
        password: hashedPassword,
        phone,
        loginIdentifier,
      });

      await newUser.save();

      return newUser;
    } catch (error) {
      throw new Error(errorMessage.internalServerError);
    }
  }
  async loginUser(loginIdentifier, password) {
    try {
      const validUser = await findUserByLoginIdentifier(loginIdentifier);

      if (!validUser) {
        throw new Error(errorMessage.notvalidUser);
      }
      const validPassword = await bcrypt.compare(password, validUser.password);

      if (!validPassword) {
        throw new Error(errorMessage.notvalidPassword);
      }

      return validUser;
    } catch (error) {
      if (!validUser) {
        throw new Error(errorMessage.notvalidUser);
      }
      const validPassword = await bcrypt.compare(password, validUser.password);
      if (!validPassword) {
        throw new Error(errorMessage.notvalidPassword);
      }
      return validUser;
    }
  }
  async generateToken(user) {
    try {
      return await generateTokens(user);
    } catch (error) {
      throw new Error(errorMessage.generatingToken);
    }
  }

  async verifyRefreshToken(refreshToken) {
    try {
      const tokenDetails = verify_refreshToken(refreshToken);
      if (!tokenDetails) {
        throw new Error(errorMessage.refreshToken);
      }
      jwt.verify(refreshToken, privateKey);
      return { tokenDetails, message: successMessage("Refresh Token valid") };
    } catch (error) {
      throw new Error(errorMessage.refreshToken);
    }
  }
}

export default AuthService;
