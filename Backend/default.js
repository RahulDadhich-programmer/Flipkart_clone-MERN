import {
  categoryImages,
  productImages,
  productDetailImages,
  bannerImages,
  bannerData,
  AllProducts_Data,
  productsDetails,
} from "./src/constants/data.js";

import Media from "./src/models/mediaSchema.js";
import Product from "./src/models/ProductSchema.js";
import Footer from "./src/models/footerSchema.js";
import Category from "./src/models/CategorySchema.js";
import Banner from "./src/models/bannerSchema.js";
import { categoriesData } from "./src/constants/data.js";
import { productsData } from "./src/constants/data.js";
import { footerData } from "./src/constants/data.js";
import footerModel from "./src/models/footerSchema.js";
import AllProductsModel from "./src/models/allProductSchema.js";
import productModel from "./src/models/ProductSchema.js";
// it store default data on db
import Productlist from "./src/models/allProductSchema.js";
import allProductsModel from "./src/models/allProductSchema.js";

const DefaultData = async () => {
  try {
    // save Media Images of category, product and banner and productdetelaImages
    const mediaData = new Media({
      categoryImages: categoryImages.map((image) => ({
        imageURL: image.imageURL,
      })),
      productImages: productImages.map((image) => ({
        imageURL: image.imageURL,
      })),
      bannerImages: bannerImages.map((image) => ({ imageURL: image.imageURL })),
    });

    // await mediaData.save();

    // bannerData Save
    // const bannerCreation = [];
    // for (let i = 0; i < bannerData.length; i++) {
    //   const Banners = bannerData[i];
    //   const imageURL = bannerImages[i].imageURL;
    //   const newBanners = new Banner({
    //     id: Banners.id,
    //     imageURL: imageURL,
    //   });
    //   bannerCreation.push(newBanners.save());
    // }
    // await Promise.all(bannerCreation);

    // categoriesData save
    // const categoryCreationPromises = [];
    // for (let i = 0; i < categoriesData.length; i++) {
    //   const category = categoriesData[i];
    //   const imageURL = categoryImages[i].imageURL;

    //   const newCategory = new Category({
    //     id: category.id,
    //     Title: category.Title,
    //     imageURL: imageURL,
    //   });
    //   categoryCreationPromises.push(newCategory.save());
    // }
    // await Promise.all(categoryCreationPromises);

    // productsData save
    // const productCreationPromises = [];
    // for (let i = 0; i < productsData.length; i++) {
    //   const product = productsData[i];
    //   const imageURL = productImages[i].imageURL;

    //   const productCategory = new Product({
    //     imageURL: imageURL,
    //     productType: product.productType,
    //     Name: product.Name,
    //     offer: product.offer,
    //     tag: product.tag,
    //   });
    //   productCreationPromises.push(productCategory.save());
    // }
    // const products = await Promise.all(productCreationPromises);

    // const productList = new Productlist(AllProducts_Data);
    // await allProductsModel.insertMany(AllProducts_Data);

    // productList.save();
    // await bannerModel.insertMany(Banner);
    // await productModel.insertMany(products);
    // await footerModel.insertMany(footerData);
    await AllProductsModel.insertMany(AllProducts_Data);
    console.log("Data imported Successfully");
  } catch (error) {
    console.log("error while inserting data", error.message);
  }
};

export default DefaultData;
