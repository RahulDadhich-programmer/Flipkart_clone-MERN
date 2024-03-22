import Footer from "../../models/footerSchema.js";
import { HttpStatusCode } from "../middleware/statusCode.js";

export const getFooter = async (req, res) => {
  try {
    const footer = await Footer.find({});
    res.status(HttpStatusCode.OK).json({ footer });
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: errorMessage.internalServerError });
  }
};
