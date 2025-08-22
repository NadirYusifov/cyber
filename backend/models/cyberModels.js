import mongoose from "mongoose";
import { cyberauthSchema } from "../schemas/cyberSchema.js";
import { cyberproductsSchema } from "../schemas/cyberSchema.js";

export const cyberauthModels = mongoose.model("auth", cyberauthSchema);
export const cyberproductsModels = mongoose.model("productslist", cyberproductsSchema);
