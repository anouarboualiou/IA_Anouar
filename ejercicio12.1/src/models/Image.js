import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  filename: String,
  url: String,
  objects: [String],
});

export default mongoose.models.Image ||
  mongoose.model("Image", ImageSchema);