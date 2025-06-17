import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String },
  reason: { type: String },
  description: { type: String },
});

export default mongoose.model("Contact", contactSchema);
