import TestModel from '../models/test.model.js';
import PersonalityResult from '../models/results.model.js';
import UserProfile from '../models/profile.schema.js';
import User from '../models/user.model.js';
import questions from '../data/questions.json' with { type: 'json' };
import { calculatePersonality } from '../utils/personalityCalc.js';

/**
 * GET /api/v1/tests/questions
 * Returns all test questions.
 */
export const getQuestions = async (req, res) => {
  try {
    return res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * POST /api/v1/tests/save
 * Saves intermediate progress of the test.
 */
export const saveTestProgress = async (req, res) => {
  try {
    const userId = req.user._id;
    const { testType, testData } = req.body;

    if (!testData || !Array.isArray(testData)) {
      return res.status(400).json({ message: 'Invalid test data format' });
    }

    // Check if there is already an in-progress test
    let test = await TestModel.findOne({ userId, status: 'in-progress' });
    if (test) {
      test.testType = testType || test.testType;
      test.testData = testData;
      test.createdAt = Date.now();
      await test.save();
    } else {
      test = await TestModel.create({
        userId,
        testType: testType || 'full',
        testData,
        status: 'in-progress'
      });
    }

    return res.status(200).json({
      message: 'Progress saved successfully',
      testId: test._id,
      answeredCount: testData.length
    });
  } catch (error) {
    console.error('Error saving progress:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * POST /api/v1/tests/submit
 * Submits final answers, calculates results, saves test & results to DB, and returns them.
 */
export const getInProgressTest = async (req, res) => {
  try {
    const userId = req.user._id;
    const test = await TestModel.findOne({ userId, status: 'in-progress' });
    if (!test) {
      return res.status(404).json({ message: 'No in-progress test found' });
    }
    return res.status(200).json({ testType: test.testType, testData: test.testData });
  } catch (error) {
    console.error('Error fetching in-progress test:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * POST /api/v1/tests/submit
 * Submits final answers, calculates results, saves test & results to DB, and returns them.
 */
export const getCompletedTest = async (req, res) => {
  try {
    const userId = req.user._id;
    // Find the most recent completed test
    const test = await TestModel.findOne({ userId, status: 'completed' })
      .sort({ completedAt: -1 })
      .select('testType testData personalityResult completedAt');
    if (!test) {
      return res.status(404).json({ message: 'No completed test found' });
    }

    // Recalculate the full result so frontend gets scores, traitDetails, archetype
    let calculation = null;
    if (test.testData && test.testData.length > 0) {
      const answersObj = {};
      test.testData.forEach(item => {
        answersObj[item.questionId] = item.answer;
      });
      calculation = calculatePersonality(answersObj);
    }

    return res.status(200).json({
      testType: test.testType,
      testData: test.testData,
      completedAt: test.completedAt,
      calculation
    });
  } catch (error) {
    console.error('Error fetching completed test:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const submitTest = async (req, res) => {
  try {
    const userId = req.user._id;
    const { testType, testData, timeSpent } = req.body;

    if (!testData || !Array.isArray(testData)) {
      return res.status(400).json({ message: 'Invalid test data format' });
    }

    // Convert testData array into a key-value object for personality calculation
    const answersObj = {};
    testData.forEach(item => {
      answersObj[item.questionId] = item.answer;
    });

    // Run personality calculation
    const calculation = calculatePersonality(answersObj);
    const { scores, traitDetails, archetype } = calculation;

    // Get attempt number
    const completedAttemptsCount = await TestModel.countDocuments({ userId, status: 'completed' });
    const attemptNumber = completedAttemptsCount + 1;

    // Find current in-progress test to convert, or create a new completed one
    let test = await TestModel.findOne({ userId, status: 'in-progress' });
    if (test) {
      test.testType = testType || test.testType;
      test.testData = testData;
      test.status = 'completed';
      test.personalityResult = {
        O: scores.O,
        C: scores.C,
        E: scores.E,
        A: scores.A,
        N: scores.N
      };
      test.attemptNumber = attemptNumber;
      test.timeSpent = timeSpent || test.timeSpent;
      test.completedAt = Date.now();
      await test.save();
    } else {
      test = await TestModel.create({
        userId,
        testType: testType || 'full',
        testData,
        status: 'completed',
        personalityResult: {
          O: scores.O,
          C: scores.C,
          E: scores.E,
          A: scores.A,
          N: scores.N
        },
        attemptNumber,
        timeSpent,
        completedAt: Date.now()
      });
    }

    // Create the PersonalityResult entry
    const result = await PersonalityResult.create({
      userId,
      testId: test._id,
      openness: scores.O,
      conscientiousness: scores.C,
      extraversion: scores.E,
      agreeableness: scores.A,
      neuroticism: scores.N,
      personalityType: archetype.title
    });

    // Update User Profile
    let userProfile = await UserProfile.findOne({ userId });
    if (!userProfile) {
      userProfile = await UserProfile.create({
        userId,
        personalityResult: result._id
      });
    } else {
      userProfile.personalityResult = result._id;
      userProfile.updatedAt = Date.now();
      await userProfile.save();
    }

    // Update User test history and profile association
    const user = await User.findById(userId);
    user.profile = userProfile._id;
    if (!user.testHistory.includes(test._id)) {
      user.testHistory.push(test._id);
    }
    await user.save();

    return res.status(200).json({
      message: 'Test submitted and results calculated successfully',
      testId: test._id,
      resultId: result._id,
      calculation
    });
  } catch (error) {
    console.error('Error submitting test:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message, stack: error.stack });
  }
};
