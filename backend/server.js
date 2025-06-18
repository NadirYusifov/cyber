import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 7575;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});