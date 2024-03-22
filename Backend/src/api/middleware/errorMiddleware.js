import {
  DuplicateEntryError,
  JoiValidationError,
} from "../middleware/customError.js";
import { errorMessage, successMessage, HttpStatusCode } from "../../index.js";

export const notFoundHandler = (req, res) => {
  res.status(HttpStatusCode.NOT_FOUND).json({ error: errorMessage.NOT_FOUND });
};

export const errorHandler = (err, req, res) => {
  try {
    if (
      err instanceof DuplicateEntryError ||
      err instanceof JoiValidationError
    ) {
      res.status(err.status).json({
        error: errorMessage[err.message] || errorMessage.internalServerError,
      });
    }
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: errorMessage.internalServerError });
  }
};
