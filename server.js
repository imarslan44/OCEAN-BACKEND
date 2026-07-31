import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { FRONTEND_ORIGIN, PORT } from './config/env.config.js';
import { connectDB } from './config/db.config.js';
import userRouter from './routes/user.routes.js';
import resultRouter from './routes/results.routes.js';
import testRouter from './routes/test.routes.js';
import inviteRouter from './routes/invite.routes.js';
import learningProgressRouter from './routes/learningProgress.routes.js';
import feedbackRouter from './routes/feedback.routes.js';

connectDB();

const app = express();

// Security Headers
app.use(helmet());

// CORS configuration with environment origin support
const allowedOrigins = FRONTEND_ORIGIN
  ? FRONTEND_ORIGIN.split(',').map(s => s.trim())
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Body parser with 100kb payload size limit
app.use(express.json({ limit: '100kb' }));
app.use(cookieParser());

// Global API Rate Limiting
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests, please try again later.' }
});

// Auth Rate Limiter for brute force protection
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many login/register attempts. Please try again after 15 minutes.' }
});

app.use('/api', globalLimiter);
app.use('/api/v1/users/login', authLimiter);
app.use('/api/v1/users/register', authLimiter);

app.use("/api/v1/users", userRouter);
app.use('/api/v1/results', resultRouter);
app.use('/api/v1/tests', testRouter);
app.use('/api/v1/invites', inviteRouter);
app.use('/api/v1/learning-progress', learningProgressRouter);
app.use('/api/v1/feedback', feedbackRouter);

app.get('/', (req, res) => {
    res.send('OCEAN API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
