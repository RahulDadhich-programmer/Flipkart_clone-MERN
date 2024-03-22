import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({
  title: { type: String },
  links: [
    {
      Name: { type: String },
      redirect: { type: String },
    },
  ],
});

const footerModel = mongoose.model("Footer", footerSchema);
export default footerModel;
