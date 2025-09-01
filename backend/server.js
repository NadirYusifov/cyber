import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { cyberauthRoutes } from "./routes/cyberauthRoutes.js";
import { cyberproductsRoutes } from "./routes/cyberproductsRoutes.js";

const app = express();
dotenv.config();

const PORT = 7575;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

// Routes
app.use("/auth", cyberauthRoutes);
app.use("/products", cyberproductsRoutes);

// Mongoose connect
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

// Server running
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
