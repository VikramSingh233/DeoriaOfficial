
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String },
    videoUrl: { type: String },
});

export default mongoose.model("Blog", blogSchema);
