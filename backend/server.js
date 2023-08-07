import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from '../backend/routes/userRoute.js';
import bodyParser from "body-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err.message));

const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) {
    res.send(product);
  } else res.status(404).send({ msg: "Product not found!" });
});

app.listen(3001, () => {
  console.log("Server started at http://localhost:3001");
});
