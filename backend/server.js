import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { cyberProductsRouter } from './routes/cyberRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = 7575;

app.use('/products', cyberProductsRouter);

const mongoconnect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('Connected to MongoDB');
      })
    } catch (error) {
        console.log('Error connecting to MongoDB', error.message);
    };
};
console.log(mongoconnect());


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});