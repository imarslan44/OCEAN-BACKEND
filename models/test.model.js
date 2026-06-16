import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  attemptNumber: {
    type: Number,
    default: 1
  },
  personalityResult: {
       O : Number,
       C : Number,
       E : Number,
       A : Number,
       N : Number 
  },
  status: {
    type: String,
    enum: ['in-progress', 'completed', 'abandoned'],
    default: 'in-progress'
  },
  startedAt: {
    type: Date,
    default: Date.now
  },
  completedAt: Date,
  timeSpent: Number, // in seconds
  createdAt: {
    type: Date,
    default: Date.now
  },
  testType: {
    type: String,
    enum: ['short', 'full'],
    default: 'short'
  },
  testData: [
    {
      questionId: String,
      questionText: String,
      answer: Number
    }
  ]

});

const TestModel = mongoose.model('Test', testSchema);
export default TestModel;