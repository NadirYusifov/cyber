import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { cyberauthRoutes } from "./routes/cyberauthRoutes.js";
import { cyberproductsRoutes } from "./routes/cyberproductsRoutes.js";

const app = express();
dotenv.config();



const PORT = 7575;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use("/admin/login", cyberauthRoutes);
app.use("/products", cyberproductsRoutes);

const mongoconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};
console.log(mongoconnect());

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
