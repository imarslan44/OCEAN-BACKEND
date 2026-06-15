import { PersonalityResult } from "../models/result.model.js";



export const saveResult = async (req, res) => {
    try {
        const { testId, openness, conscientiousness, extraversion, agreeableness, neuroticism, personalityType } = req.body;
        
    } catch (error) {
        console.error("Error saving result:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}