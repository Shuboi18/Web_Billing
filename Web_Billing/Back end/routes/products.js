const express = require("express");
const router = express.Router();
const { Product_Master } = require("../src/models");

router.get("/", async (req, res) => {
  const allProducts = await Product_Master.findAll();
  res.json(allProducts);
});

router.post("/", async (req, res) => {
  const product = req.body;
  await Product_Master.create(product);
  res.json(product);
});

module.exports = router;
