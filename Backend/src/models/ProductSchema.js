import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  imageURL: String,
  productType: { type: String },
  Name: { type: String },
  offer: {
    type: String,
  },
  tag: String,
});

const productModel = mongoose.model("Product", productSchema);
export default productModel;
