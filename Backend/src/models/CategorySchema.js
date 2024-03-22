import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  imageURL: {
    type: String,
    ref: "Media",
  },
  Title: String,
});

const categoryModel = mongoose.model("Category", categorySchema);
export default categoryModel;
