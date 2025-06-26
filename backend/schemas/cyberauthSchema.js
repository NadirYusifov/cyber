import mongoose, { Schema } from "mongoose";

export const cyberauthSchema = new mongoose.Schema({
  name: { String, require },
  password: { Number, require },
});
