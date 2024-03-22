import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  userRoutes,
  refreshTokenRoute,
  homeRoutes,
  allProductRoute,
} from "./api/routes/index.js";
import productRoute from "./api/routes/products.js";
import connectDb from "./config/connectdb.js";
import { notFoundHandler } from "./api/middleware/index.js";
import { HttpStatusCode, errorMessage } from "./index.js";
import DefaultData from "../default.js";
import { getFooter } from "./api/controllers/footerContoller.js";
import cartRoute from "./api/routes/cartRoutes.js";
const app = express();
dotenv.config();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

connectDb(DATABASE_URL);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is Running at Port Number ${port}`);
});

// DefaultData();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRoutes);
app.use("/api", refreshTokenRoute);

app.use("/", homeRoutes);

app.use("/v1", allProductRoute);
app.use("/product", cartRoute);

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: errorMessage.internalServerError,
  });
});
