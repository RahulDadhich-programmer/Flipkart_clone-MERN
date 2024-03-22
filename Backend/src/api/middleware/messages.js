export const successMessage = (action) => `${action} successfull`;
export const errorMessage = {
  internalServerError: "Internal Server Error",
  duplicateEntry: "Email or phone number is already registered",
  wrongError: "Something went wrong while finding the user",
  notvalidUser: "Invalid user credential",
  notfound: "Not Found",
  notvalidPassword: "not valid password",
  globalError: "Something Went Wrong",
  generatingToken: "Error generating tokens",
  refreshToken: "Invalid Refresh token",
  verifyToken: "Something went wrong while verify refresh token",
};
