const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const Sale = require("../models/sale.model");

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
  console.log(sales);
  res.json(sales);
});

module.exports = router;
