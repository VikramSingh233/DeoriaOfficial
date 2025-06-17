import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  createdAt: { type: String, required: true }, 
  images: [{ type: String }],
  description: { type: String, required: true },
});

export default mongoose.models.History || mongoose.model("History", historySchema);
