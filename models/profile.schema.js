import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  bio: String,
  avatar: String, // URL to image
  interests: [String],
  location: String,
  country: String,
  ageRange: String,
  goals: [String],
  profileSetupComplete: {
    type: Boolean,
    default: false
  },
  onboardingComplete: {
    type: Boolean,
    default: false
  },
  testSkipped: {
    type: Boolean,
    default: false
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  personalityResult: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PersonalityResult'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


const UserProfile = mongoose.model('UserProfile', userProfileSchema);
export default  UserProfile;
