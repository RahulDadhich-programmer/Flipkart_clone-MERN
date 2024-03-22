import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema([
  {
    categoryImages: [
      {
        imageURL: {
          type: String,
          required: true,
          unique: true,
        },
      },
    ],
  },
  {
    productImages: [
      {
        imageURL: {
          type: String,
          required: true,
          unique: true,
        },
      },
    ],
  },

  {
    productDetailImages: [
      {
        Type: {
          type: String,
          required: true,
        },
        imageURL: {
          type: String,
          required: true,
          unique: true,
        },
      },
    ],
  },
  {
    bannerImages: [
      {
        imageURL: {
          type: String,
          required: true,
          unique: true,
        },
      },
    ],
  },
]);

const mediaModel = mongoose.model("Media", mediaSchema);

export default mediaModel;
