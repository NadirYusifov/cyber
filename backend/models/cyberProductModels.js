import mongoose from "mongoose";
import { cyberProductSchema } from "../schemas/cyberProductSchema.js";

export const cyberProductModels = mongoose.model('products', cyberProductSchema);