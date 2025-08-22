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
    name: { type: String, required: true },
    email: { type: String, requried: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { versionKey: false },
);
