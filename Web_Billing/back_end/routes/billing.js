const express = require("express");
const router = express.Router();
const { Billing_Master } = require("../src/models");

router.get("/", async (req, res) => {
  const allProducts = await Billing_Master.findAll();
  res.json(allProducts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const productDeets = await Billing_Master.findByPk(id);
  res.json(productDeets);
});

router.post("/", async (req, res) => {
  const product = req.body;
  await Billing_Master.create(product);
  res.json(product);
});

router.post("/deleteId/:id", async (req, res) => {
  const id = req.params.id;
  await Billing_Master.destroy({ where: { id: id } });
});
module.exports = router;
