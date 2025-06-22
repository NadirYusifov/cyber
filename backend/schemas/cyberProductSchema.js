import mongoose from "mongoose";

export const cyberProductSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
    }
);