import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT } from './config/env.config.js';
import { connectDB } from './config/db.config.js';
import userRouter from './routes/user.routes.js';
connectDB();



const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/users", userRouter);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});





app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

