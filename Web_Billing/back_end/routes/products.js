const express = require("express");
const router = express.Router();
const { Product_Master } = require("../src/models");

router.get("/", async (req, res) => {
  const allProducts = await Product_Master.findAll();
  res.json(allProducts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const productDeets = await Product_Master.findByPk(id);
  res.json(productDeets);
});

router.post("/", async (req, res) => {
  const product = req.body;
  await Product_Master.create(product);
  res.json(product);
});

router.post("/deleteId/:id", async (req, res) => {
  const id = req.params.id;
  await Product_Master.destroy({ where: { id: id } });
});

router.post("/updateId/:id", async (req, res) => {
  const id = req.params.id;
  await Product_Master.update(req.body, { where: { id: id } });
  res.json("Updated Successfully");
});

module.exports = router;
