import { Schema, model } from "mongoose";

const productShema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const productModel = model("products", productShema);

export const Product = productModel;
