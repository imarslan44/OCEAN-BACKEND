import PersonalityResult  from "../models/results.model.js";
import { calculatePersonality } from "../utils/personalityCalc.js";
import { demoAnswers } from "../utils/personalityCalc.js";

export const saveResults = async (data) => {
    try {
        const {O, C, E, A, N} = data
        
    } catch (error) {
        console.error("Error saving result:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const calculateResults = async (req, res)=>{
  console.log("hit the request.")
    try{
        //get data from save test middleware
        // const {
        //     userId,
        //     testType,
        //     testData,
        //     personalityResult,
        //     status,
        //     testId  } = req.data;
        const testData = req.body

            // if(status !== "completed") return res.json({message: "Test is incomplete yet"});

           const results =  calculatePersonality(testData);
          

           //send response to check
           return res.status(200).json({
            message:"resluts are calculated",
            results
           })


           
           


    } catch(error){
     return res.status(500).json({message: "Internal server error"})
    }

}