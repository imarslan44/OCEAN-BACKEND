import express from "express";
import { submitFeedback, getFeedback } from "../controllers/feedback.controller.js";
import { authenticateToken } from "../middlewares/testResult.middleware.js";

const feedbackRouter = express.Router();

// Public endpoint - auth optional so guest users can submit too
// We manually attach req.user if a token exists, but do not block without one
const optionalAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return next();
  try {
    await authenticateToken(req, res, next);
  } catch {
    next();
  }
};

feedbackRouter.post("/", optionalAuth, submitFeedback);
feedbackRouter.get("/", authenticateToken, getFeedback);

export default feedbackRouter;
