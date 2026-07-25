import { Router } from "express";
import {
  getLearningProgress,
  saveLearningLevelProgress,
  saveLearningProgress,
} from "../controllers/learningProgress.controller.js";
import { authenticateToken } from "../middlewares/testResult.middleware.js";

const learningProgressRouter = Router();

learningProgressRouter.get("/", authenticateToken, getLearningProgress);
learningProgressRouter.put("/", authenticateToken, saveLearningProgress);
learningProgressRouter.patch(
  "/skills/:skillId/levels/:levelId",
  authenticateToken,
  saveLearningLevelProgress
);

export default learningProgressRouter;
