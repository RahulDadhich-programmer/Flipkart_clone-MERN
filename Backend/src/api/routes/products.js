import express from "express";

import { getproductById } from "../controllers/index.js";
import {
  getProductFilter,
  getProductsDetail,
} from "../controllers/product-Controller.js";
import { categoryProducts } from "../middleware/productMiddleware.js";
const router = express.Router();
// similar product route
router.post("/allProducts/:productType", categoryProducts, getproductById);
// filter similar product route
router.post(
  "/allProducts/filterproducts/:productType",
  categoryProducts,
  getProductFilter
);
// prodcutDetail route
router.get("/productdetail/:product_id", getProductsDetail);

export default router;
