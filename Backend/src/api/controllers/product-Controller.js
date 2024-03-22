import { Product } from "./index.js";
import { Productlist } from "./index.js";
import { HttpStatusCode, errorMessage } from "../../index.js";

import { categoryProducts } from "./../middleware/productMiddleware.js";
// get similar Products
export const getproductById = async (req, res) => {
  try {
    // get data from middleware, categorizedProducts
    const categorizedProducts = req.categorizedProducts;
    return res.status(HttpStatusCode.OK).json(categorizedProducts);
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: errorMessage.internalServerError });
  }
};
// Similar Products filter applied
export const getProductFilter = async (req, res) => {
  try {
    const categorizedProducts = req.categorizedProducts;
    const { priceMin, priceMax, ratings } = req.body;
    const productType = req.params.productType;

    let minRating;
    let maxRating;

    // Calculate the rating range based on the selected radio button value
    switch (ratings) {
      case "1":
        minRating = 1;
        maxRating = 1.9;
        break;
      case "2":
        minRating = 2;
        maxRating = 2.9;
        break;
      case "3":
        minRating = 3;
        maxRating = 3.9;
        break;
      case "4":
        minRating = 4;
        maxRating = 5;
        break;
      default:
        minRating = 0;
        maxRating = 5;
    }

    const filteredSimilarProducts = categorizedProducts?.filter((product) => {
      const productPrice = parseInt(product.price);
      const productRatings = parseFloat(product.ratings);

      return (
        productRatings >= minRating &&
        productRatings < maxRating &&
        productPrice >= parseInt(priceMin) &&
        productPrice <= parseInt(priceMax)
      );
    });

    return res.status(HttpStatusCode.OK).json(filteredSimilarProducts);
  } catch (error) {
    return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: errorMessage.internalServerError });
  }
};

//productDetail page
export const getProductsDetail = async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const filter = Object.keys(Productlist.schema.paths).reduce(
      (acc, category) => {
        if (Array.isArray(Productlist.schema.paths[category].instance)) {
          acc[`${category}.product_id`] = product_id;
        }
        return acc;
      },
      {}
    );
    const ProductDetail = await Productlist.findOne(filter);
    if (!ProductDetail) {
      return res
        .status(HttpStatusCode.NOT_FOUND)
        .json({ message: errorMessage.notfound });
    }
    let matchedProduct = null;
    let matchedCategory = null;
    Object.keys(ProductDetail.toObject()).forEach((category) => {
      if (Array.isArray(ProductDetail[category])) {
        const foundProduct = ProductDetail[category].find(
          (product) => product.product_id === product_id
        );
        if (foundProduct) {
          matchedCategory = category;
          matchedProduct = foundProduct;
        }
      }
    });

    if (!matchedProduct) {
      return res
        .status(HttpStatusCode.NOT_FOUND)
        .json({ message: errorMessage.notfound });
    }
    res.json({ [matchedCategory]: [matchedProduct] });
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
