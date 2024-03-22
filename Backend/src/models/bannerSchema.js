import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  imageURL: String,
});

const bannerModel = mongoose.model("Banner", bannerSchema);

export default bannerModel;
