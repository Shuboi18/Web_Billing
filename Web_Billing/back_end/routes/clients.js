const express = require("express");
const router = express.Router();
const { Client_Master } = require("../src/models");

router.get("/", async (req, res) => {
  const allClients = await Client_Master.findAll();
  res.json(allClients);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const customerDeets = await Client_Master.findByPk(id);
  res.json(customerDeets);
});

router.post("/", async (req, res) => {
  const client = req.body;
  await Client_Master.create(client);
  res.json(client);
});

router.post("/deleteId/:id", async (req, res) => {
  const id = req.params.id;
  await Client_Master.destroy({ where: { id: id } });
});

router.post("/updateId/:id", async (req, res) => {
  const id = req.params.id;
  await Client_Master.update(req.body, { where: { id: id } });
  res.json("Updated Successfully");
});

module.exports = router;
