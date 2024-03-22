import jwt from "jsonwebtoken";
import { verify_refreshToken } from "./index.js";
import { errorMessage, HttpStatusCode } from "../../index.js";

export const validateRefreshToken = async (req, res, next) => {
  const { refreshToken } = req.body;
  try {
    const tokenDetails = await verify_refreshToken(refreshToken);
    if (!tokenDetails) {
      return res
        .status(HttpStatusCode.UNAUTHORIZED)
        .json({ message: errorMessage.refreshToken });
    }
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_PRIVATE_KEY,
      (err, decoded) => {
        if (err) {
          return res
            .status(HttpStatusCode.UNAUTHORIZED)
            .json({ message: errorMessage.refreshToken });
        }
        req.userId = decoded._id;
        next();
      }
    );
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: errorMessage.internalServerError });
  }
};

export default validateRefreshToken;
