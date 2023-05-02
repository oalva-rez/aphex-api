const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    audio: String,
    title: String,
    artist: String,
    price: Number,
    image: String,
    genre: String,
    bpm: String,
    key: String,
    slug: String,
    createdAt: String,
  },
  { collection: "products" }
);

module.exports = mongoose.model("product", productSchema);
