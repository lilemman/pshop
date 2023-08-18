const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();
const cors = require("cors");
const products = require("./data/products.js");
const connectDB = require("./config/db");
connectDB();
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("API running");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`server running on port ${port}`));
