const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const db = require("./src/models");

// Routing
const proRouter1 = require("./routes/products");
app.use("/products", proRouter1);

const proRouter2 = require("./routes/clients");
app.use("/clients", proRouter2);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Everything is working well");
  });
});
