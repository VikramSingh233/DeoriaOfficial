import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema({
  thumbnail: { type: String, required: true }, // cloudinary image
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: String }, // e.g., "25:30"
  date: { type: String }, // or use type: Date
  guestName: { type: String },
  guestDescription: { type: String },
  link: { type: String },
  category: { type: String },
});


export default mongoose.models.Podcast || mongoose.model("Podcast", podcastSchema);
