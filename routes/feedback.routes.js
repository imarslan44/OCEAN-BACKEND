import express from "express";
import { submitFeedback, getFeedback } from "../controllers/feedback.controller.js";
import { authenticateToken } from "../middlewares/testResult.middleware.js";

const feedbackRouter = express.Router();

// Public endpoint - auth optional so guest users can submit too
// We manually attach req.user if a token exists, but do not block without one
const optionalAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader && !req.cookies?.token) return next();
  try {
    await authenticateToken(req, res, next);
  } catch {
    next();
  }
};

// Admin middleware check
const requireAdmin = (req, res, next) => {
  const adminSecret = process.env.ADMIN_SECRET;
  const providedKey = req.headers["x-admin-key"];
  if ((adminSecret && providedKey === adminSecret) || req.user?.isAdmin || req.user?.role === "admin") {
    return next();
  }
  return res.status(403).json({ message: "Forbidden: Admin authorization required" });
};

feedbackRouter.post("/", optionalAuth, submitFeedback);
feedbackRouter.get("/", authenticateToken, requireAdmin, getFeedback);

export default feedbackRouter;
