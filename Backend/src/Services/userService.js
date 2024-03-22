import UserModel from "./../models/UserModel.js";
import { HttpStatusCode, errorMessage } from "../index.js";
async function findUserByLoginIdentifier(loginIdentifier) {
  try {
    const user = await UserModel.findOne({
      $or: [{ email: loginIdentifier }, { phone: loginIdentifier }],
    });

    return user;
  } catch (error) {
    res
      .status(HttpStatusCode.UNAUTHORIZED)
      .json({ message: errorMessage.wrongError });
  }
}

async function ExistUser(email) {
  try {
    const existingUser = await UserModel.findOne({
      email,
    });
    return existingUser;
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: errorMessage.internalServerError });
  }
}

export { findUserByLoginIdentifier, ExistUser };
