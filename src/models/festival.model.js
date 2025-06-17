import mongoose from "mongoose";

const festivalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // cloudinary link
  description: { type: String, required: true },
});

export default mongoose.model("Festival", festivalSchema);
