const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    mp3Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    discountedPercentage: Number,
    salePrice: Number,
  },
  { collection: "sale-items" }
);

module.exports = mongoose.model("sale", saleSchema);
