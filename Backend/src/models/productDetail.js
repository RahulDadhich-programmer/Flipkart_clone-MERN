import mongoose from "mongoose";

const productDetailSchema = new mongoose.Schema({
  product_id: String,
  url: String,
  detailUrl: String,
  title: Object,
  price: Number,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const productDetailModel = mongoose.model(
  "productsDetail",
  productDetailSchema
);

export default productDetailModel;
