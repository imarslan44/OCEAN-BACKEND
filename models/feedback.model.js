import mongoose from "mongoose";

/**
 * Feedback Schema
 * Handles all feedback types:
 *  - combo_cards_rating   : 1-5 rating of combination cards deck
 *  - combo_reaction       : like/dislike on a specific combo card
 *  - trait_insights_rating: 1-5 rating of individual trait insights
 *  - learn_feature_rating : 1-5 + text feedback after level completion
 */
const feedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    // For guest users who are not logged in
    guestId: {
      type: String,
      required: false,
    },
    // Discriminator for the kind of feedback
    source: {
      type: String,
      required: true,
      enum: [
        "combo_cards_rating",
        "combo_reaction",
        "trait_insights_rating",
        "learn_feature_rating",
      ],
    },
    // 1-5 numeric rating (used by combo_cards_rating, trait_insights_rating, learn_feature_rating)
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    // For combo_reaction: e.g. "A+C", "O+E"
    comboName: {
      type: String,
    },
    // For combo_reaction: 'like' or 'dislike'
    reaction: {
      type: String,
      enum: ["like", "dislike"],
    },
    // For learn_feature_rating
    whatsGood: {
      type: String,
      maxlength: 1000,
    },
    // For learn_feature_rating
    whatsBad: {
      type: String,
      maxlength: 1000,
    },
    // For learn_feature_rating: which skill/level was played
    skillId: {
      type: String,
    },
    levelId: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
