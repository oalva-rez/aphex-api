const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const Sale = require("../models/sale.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("<h1>Express</h1>");
});
router.get("/products", async function (req, res, next) {
  const products = await Product.find();
  res.json(products);
});
router.get("/products/sale", async function (req, res, next) {
  const sales = await Sale.find().populate("mp3Id");
  res.json(sales);
});
router.get("/products/:slug", async function (req, res, next) {
  const product = await Product.findOne({ slug: req.params.slug });
  let salePrice = null;
  // check if product is on sale
  const sale = await Sale.findOne({ mp3Id: product._id });
  console.log(sale);
  if (sale) {
    salePrice = sale.salePrice;
  }
  res.json({ ...product._doc, salePrice });
});

module.exports = router;
