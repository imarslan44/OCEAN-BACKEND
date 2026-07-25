import mongoose from "mongoose";

const learningLevelProgressSchema = new mongoose.Schema(
  {
    exerciseIndex: {
      type: Number,
      default: 0,
      min: 0,
    },
    responses: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completedAt: Date,
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const learningSkillProgressSchema = new mongoose.Schema(
  {
    currentLevelId: String,
    unlockedLevelId: String,
    levels: {
      type: Map,
      of: learningLevelProgressSchema,
      default: {},
    },
  },
  { _id: false }
);

const learningProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    currentSkillId: String,
    currentLevelId: String,
    completed: {
      type: Boolean,
      default: false,
    },
    skills: {
      type: Map,
      of: learningSkillProgressSchema,
      default: {},
    },
    schemaVersion: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const LearningProgress = mongoose.model("LearningProgress", learningProgressSchema);

export default LearningProgress;
