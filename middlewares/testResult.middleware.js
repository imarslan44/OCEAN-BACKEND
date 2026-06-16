import TestModel from "../models/test.model.js"
import {JWT_SECRET} from "../config/env.config.js"

export const saveTest = async (req, res, next)=>{
    
    try{
        const {token} = req.cookies.token;
        const {testType, testData, } = req.body

        if(!token){
            return res.status(401).json({message: "Unauthorized"})
        }
    
        const decoded = jwt.verify(token, JWT_SECRET)
        const userId = decoded.id;
        
        //CHeck how many questions have been answered and update the test progress accordingly
        let length = testType === "short" ? 25 : 50
        const testProgress = testData.length / length * 100; // Assuming 50 questions in total

        let status = "in-progress";
        if(testProgress >= 100){
            status = "completed"
        }

        
        const data = {
            userId,
            testType,
            testData,
            personalityResult: resultId,
            status,
        }
        
        const newTest = await TestModel.create(data)
        return res.status(201).json({message: "Test saved successfully", testId: newTest._id})

        req.data = {
            userId,
            testType,
            testData,
            personalityResult: resultId,
            status,
            testId: newTest._id,
        }

      next()
      
    }catch(error){
      return res.status(500).json({message: "Internal server error"})

    }
}




