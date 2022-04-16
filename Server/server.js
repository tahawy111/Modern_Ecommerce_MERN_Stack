import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv";
import connectDatabase from "./MongoDB";

dotenv.config();
connectDatabase();
const app = express();
// LOAD PRODUCT FROM SERVER
app.get("/api/products", (req, res) => {
  res.json(products);
});

// SINGLE PRODUCT FROM SERVER
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("App Is Ready");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, () =>
  console.log(`app is listen on http://localhost:${PORT}`)
);
