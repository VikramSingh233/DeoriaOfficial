import mongoose from "mongoose";


const shopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  bestFor: { type: String },
  contactNo: { type: String },
  rating: { type: Number, min: 0, max: 5 },
  image: { type: String },
  category: { type: String },
  direction: { type: String },
  top: { type: Boolean, default: false },
  watchExperience: { type: String }, 
});

export default mongoose.models.Shop ||  mongoose.model("Shop", shopSchema);
