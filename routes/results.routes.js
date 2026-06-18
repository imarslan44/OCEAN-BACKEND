import { Router } from "express";
//import { saveTest } from "../middlewares/testResult.middleware"
import { calculateResults } from "../controllers/result.controller.js"

const resultRouter = Router();

resultRouter.post("/calculate", calculateResults);



export default resultRouter;