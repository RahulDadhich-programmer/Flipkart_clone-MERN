import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },

    loginIdentifier: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
userSchema.path("loginIdentifier").validate(
  function (value) {
    return this.email || this.phone;
  },
  { timestamps: true }
);

userSchema.path("loginIdentifier").validate(function (value) {
  return this.email || this.phone;
}, "Email or phone number is required");
const UserModel = mongoose.model("user", userSchema);

export default UserModel;
