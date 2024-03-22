import { errorMessage } from "../api/middleware/messages.js";
import { UserToken } from "../models/index.js";
import jwt from "jsonwebtoken";
async function verify_refreshToken(refreshToken) {
  try {
    const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;
    const tokenDetails = await UserToken.findOne({ token: refreshToken });
    const Verify = { privateKey, tokenDetails };
    return Verify;
  } catch (error) {
    throw new Error(errorMessage.verifyToken);
  }
}
async function generateTokens(user) {
  try {
    const payload = { _id: user._id };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_PRIVATE_KEY,
      {
        expiresIn: "30d",
      }
    );

    await UserToken.findOneAndDelete({ userId: user._id });
    await new UserToken({ userId: user._id, token: refreshToken }).save();

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(errorMessage.generatingToken);
  }
}

export { verify_refreshToken, generateTokens };
