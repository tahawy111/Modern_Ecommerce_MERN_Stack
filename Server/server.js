import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import importData from "./DataImport.js";

dotenv.config();
connectDatabase();
const app = express();

// API
app.use("/api/import", importData);

app.get("/", (req, res) => {
  res.send("App Is Ready");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, () =>
  console.log(`app is listen on http://localhost:${PORT}`)
);
