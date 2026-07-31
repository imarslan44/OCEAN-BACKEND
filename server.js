import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { FRONTEND_ORIGINS, PORT, getMissingRequiredEnv } from './config/env.config.js';
import { connectDB } from './config/db.config.js';
import userRouter from './routes/user.routes.js';
import resultRouter from './routes/results.routes.js';
import testRouter from './routes/test.routes.js';
import inviteRouter from './routes/invite.routes.js';
import learningProgressRouter from './routes/learningProgress.routes.js';
import feedbackRouter from './routes/feedback.routes.js';

const app = express();

// Security Headers
app.use(helmet());

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || FRONTEND_ORIGINS.includes(origin)) {
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

const ensureRuntimeConfig = (req, res, next) => {
  const missing = getMissingRequiredEnv();

  if (missing.length > 0) {
    console.error(`Request blocked because required environment variables are missing: ${missing.join(', ')}`);
    return res.status(503).json({ message: 'Server configuration is incomplete.' });
  }

  next();
};

const ensureDatabase = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('Request blocked because MongoDB is unavailable:', error);
    return res.status(503).json({ message: 'Database is temporarily unavailable.' });
  }
};

app.use('/api', ensureRuntimeConfig);
app.use('/api', globalLimiter);
app.use('/api/v1/users/login', authLimiter);
app.use('/api/v1/users/register', authLimiter);
app.use('/api', ensureDatabase);

app.use("/api/v1/users", userRouter);
app.use('/api/v1/results', resultRouter);
app.use('/api/v1/tests', testRouter);
app.use('/api/v1/invites', inviteRouter);
app.use('/api/v1/learning-progress', learningProgressRouter);
app.use('/api/v1/feedback', feedbackRouter);

app.get('/', (req, res) => {
    res.send('OCEAN API is running');
});

app.use((err, req, res, next) => {
  if (err?.message === 'Not allowed by CORS') {
    return res.status(403).json({ message: 'Origin is not allowed by CORS.' });
  }

  console.error('Unhandled request error:', err);
  return res.status(500).json({ message: 'Internal server error' });
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
}

export default app;
