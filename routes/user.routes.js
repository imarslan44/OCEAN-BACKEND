import { Router } from "express";
import { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/user.controller.js";
import { authenticateToken } from "../middlewares/testResult.middleware.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.get("/profile", authenticateToken, getUserProfile);
userRouter.put("/profile", authenticateToken, updateUserProfile);

export default userRouter;


