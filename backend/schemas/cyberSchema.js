import mongoose from "mongoose";

export const cyberproductsSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
  },
  { versionKey: false },
);

export const cyberauthSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    password: { type: Number, require: true },
  },
  { versionKey: false },
);
