const express = require("express");
const router = express.Router();
const { Client_Master } = require("../src/models");

router.get("/", async (req, res) => {
  const allClients = await Client_Master.findAll();
  res.json(allClients);
});

router.post("/", async (req, res) => {
  const client = req.body;
  await Client_Master.create(client);
  res.json(client);
});

module.exports = router;
