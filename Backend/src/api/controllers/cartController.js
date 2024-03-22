import Cart from "../../models/cartModel.js";
import { HttpStatusCode } from "../middleware/statusCode.js";
import { Productlist } from "./index.js";
export const add_cart_item = async (req, res) => {
  const product_id = req.params.product_id;

  const { quantity, Name, price, discount, cuttedPrice } = req.body;

  try {
    let cart = await Cart.findOne();

    let item = await Productlist.findOne({ product_id });
    if (!item) {
      res.status(HttpStatusCode.NOT_FOUND).send("Item not found!");
    }

    if (cart) {
      let itemIndex = cart.products.findIndex(
        (p) => p.product_id == product_id
      );

      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        productItem.quantity += quantity;
        cart.items[itemIndex] = productItem;
      } else {
        cart.products.push({
          quantity,
          Name,
          price,
          discount,
          cuttedPrice,
          product_id,
        });
      }
      cart.bills += quantity * price;
      cart = await cart.save();

      return res.status(201).send(cart);
    } else {
      const newCart = await Cart.create({
        products: [
          {
            quantity,
            Name,
            price,
            discount,
            cuttedPrice,
            product_id,
          },
        ],
        bill: quantity * price,
      });

      return res.status(HttpStatusCode.CREATED).send(newCart);
    }
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .send("Something went wrong");
  }
};
