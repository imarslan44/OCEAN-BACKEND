import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.config.js';
import { connectDB } from './config/db.config.js';
import userRouter from './routes/user.routes.js';
import resultRouter from './routes/results.routes.js';
import testRouter from './routes/test.routes.js';


connectDB();



const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
app.use('/api/v1/results', resultRouter);
app.use('/api/v1/tests', testRouter);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});






app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

