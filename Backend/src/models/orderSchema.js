import mongoose, { mongo } from "mongoose";
const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  items: [
    {
      product_image,
      productId: {
        type: String,
      },
      Name: String,
      qty: {
        type: Number,
        min: [1, "Quantity can not be less then 1."],
      },
      price: Number,
    },
  ],
  date_added: {
    type: Date,
    default: Date.now,
  },
});

const orderProductsModel = mongoose.model("Order", orderSchema);

export default orderProductsModel;
