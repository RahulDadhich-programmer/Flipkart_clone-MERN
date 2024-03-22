import express from "express";
import { add_cart_item } from "../controllers/cartController.js";

const router = express.Router();

router.post("/cart/:product_id", add_cart_item);
export default router;
