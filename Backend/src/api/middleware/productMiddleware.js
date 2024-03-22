import { Product, Productlist } from "../controllers/index.js";
import { errorMessage } from "./messages.js";
import { HttpStatusCode } from "./statusCode.js";
// similar category products
export const categoryProducts = async (req, res, next) => {
  try {
    const { productType } = req.params;

    let categoryProduct = await Productlist.find({});

    categoryProduct = categoryProduct[0];
    const categorizedProducts = categoryProduct[productType];
    req.categorizedProducts = categorizedProducts;
    next();
  } catch (error) {
    return res.status(HttpStatusCode.BAD_REQUEST);
  }
};
