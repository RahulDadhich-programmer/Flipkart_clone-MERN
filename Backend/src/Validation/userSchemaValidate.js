import joi from "joi";

const userSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  userName: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
  password: joi.string().min(6).required(),
  loginIdentifier: joi.string().required(),
});

export { userSchema };
