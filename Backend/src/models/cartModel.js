import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  products: [
    {
      product_id: String,
      Name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity can not be less then 1."],
        default: 1,
      },
      price: Number,
      discount: Number,
      cuttedPrice: Number,
    },
  ],
  bills: { type: Number, required: true, default: 0 },
});

const CartModel = mongoose.model("Cart", CartSchema);

export default CartModel;
