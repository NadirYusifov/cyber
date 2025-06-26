import mongoose from "mongoose";
import { cyberauthSchema } from "../schemas/cyberauthSchema";

export const cyberauthModels = mongoose.model("auth", cyberauthSchema);
