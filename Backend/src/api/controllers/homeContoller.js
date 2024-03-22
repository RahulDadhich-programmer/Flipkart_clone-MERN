import { Banner, Product } from "./index.js";
import { errorMessage, HttpStatusCode } from "../../index.js";
import { Category } from "./index.js";
// category , banner,prouct --> on home page
export const homeController = async (req, res) => {
  try {
    const category = await Category.find({});
    const Banners = await Banner.find({});
    const products = await Product.find({});

    res.status(HttpStatusCode.OK).json({ category, Banners, products });
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: errorMessage.internalServerError });
  }
};
