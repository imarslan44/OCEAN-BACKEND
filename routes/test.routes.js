import { Router } from 'express';
import { getQuestions, saveTestProgress, submitTest, getInProgressTest, getCompletedTest } from '../controllers/test.controller.js';
import { authenticateToken } from '../middlewares/testResult.middleware.js';

const testRouter = Router();

// Retrieve questions (public)
testRouter.get('/questions', getQuestions);

// Save progress (protected)
testRouter.post('/save', authenticateToken, saveTestProgress);

// Check for in-progress test (protected)
testRouter.get('/in-progress', authenticateToken, getInProgressTest);

// Check for completed test (protected)
testRouter.get('/completed', authenticateToken, getCompletedTest);

// Submit test answers (protected)
testRouter.post('/submit', authenticateToken, submitTest);

export default testRouter;
