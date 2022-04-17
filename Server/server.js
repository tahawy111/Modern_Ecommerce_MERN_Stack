import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import importData from "./DataImport.js";
import productRoute from "./Routes/ProductRoute.js";
import { notFound, errorHandler } from "./Middleware/Errors.js";

dotenv.config();
connectDatabase();
const app = express();

// API
app.use("/api/import", importData);
app.use("/api/products", productRoute);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, () =>
  console.log(`app is listen on http://localhost:${PORT}`)
);
