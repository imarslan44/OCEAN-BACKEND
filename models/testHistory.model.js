import mongoose from "mongoose";

const testHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test',
    required: true
  },
  attemptNumber: {
    type: Number,
    default: 1
  },
  personalityResult: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PersonalityResult'
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
  }
});

module.exports = mongoose.model('TestHistory', testHistorySchema);