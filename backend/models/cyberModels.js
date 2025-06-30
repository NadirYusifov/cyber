import mongoose from "mongoose";
import { cyberauthSchema } from "../schemas/cyberSchema.js";
import { cyberproductsSchema } from "../schemas/cyberSchema.js";

export const cyberauthModels = mongoose.model("adminauth", cyberauthSchema);
export const cyberproductsModels = mongoose.model("productslist", cyberproductsSchema);
