import cors from 'cors';
import express from 'express';
import { cyberProductsRouter } from './routes/cyberRoutes.js';

const app = express();
const PORT = 7575;

app.use(cors());
app.use(express.json());

app.use('/products', cyberProductsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});