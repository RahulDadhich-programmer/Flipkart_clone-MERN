import { HttpStatusCode } from "../../index.js";

class DuplicateEntryError extends Error {
  constructor(message) {
    super(message);
    this.name = "DuplicateEntryError";
    this.status = HttpStatusCode.DUPLICATE_ENTRY;
  }
}

class JoiValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "JoiValidationError";
    this.status = HttpStatusCode.UNAUTHORIZED;
  }
}

export { DuplicateEntryError, JoiValidationError };
