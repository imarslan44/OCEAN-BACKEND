import mongoose from 'mongoose';

const personalityResultSchema = new mongoose.Schema({
  
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

  openness: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },

  conscientiousness: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },

  extraversion: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },

  agreeableness: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },

  neuroticism: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },

  personalityType: String, // e.g., "OCEANIC"
  version: {
    type: Number,
    default: 1
  },

  timestamp: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }

});

const PersonalityResult = mongoose.model('PersonalityResult', personalityResultSchema);

export default PersonalityResult;