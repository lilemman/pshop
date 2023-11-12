const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();
const cors = require("cors");
const productsRoute = require("./routes/productsRoute.js");
const {notFound,errorHandler}=require("./middleware/errorMiddleware.js")
const connectDB = require("./config/db");
connectDB();
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/api/products", productsRoute);

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`server running on port ${port}`));
