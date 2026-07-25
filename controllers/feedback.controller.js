import Feedback from "../models/feedback.model.js";

/**
 * POST /api/v1/feedback
 * Accepts any feedback type. The userId comes from the auth token if present,
 * or a guestId from the body if not authenticated.
 */
export const submitFeedback = async (req, res) => {
  try {
    const userId = req.user?._id ?? null;
    const {
      guestId,
      source,
      rating,
      comboName,
      reaction,
      whatsGood,
      whatsBad,
      skillId,
      levelId,
    } = req.body;

    if (!source) {
      return res.status(400).json({ message: "source is required" });
    }

    const validSources = [
      "combo_cards_rating",
      "combo_reaction",
      "trait_insights_rating",
      "learn_feature_rating",
    ];
    if (!validSources.includes(source)) {
      return res.status(400).json({ message: `Invalid source: ${source}` });
    }

    // Source-specific validation
    if (source === "combo_reaction") {
      if (!comboName || !["like", "dislike"].includes(reaction)) {
        return res.status(400).json({
          message: "combo_reaction requires comboName and reaction (like|dislike)",
        });
      }
    }

    if (
      ["combo_cards_rating", "trait_insights_rating", "learn_feature_rating"].includes(source)
    ) {
      if (rating == null || rating < 1 || rating > 5) {
        return res
          .status(400)
          .json({ message: "rating must be between 1 and 5" });
      }
    }

    const feedback = await Feedback.create({
      userId,
      guestId: userId ? null : guestId,
      source,
      rating,
      comboName,
      reaction,
      whatsGood,
      whatsBad,
      skillId,
      levelId,
    });

    return res.status(201).json({ success: true, feedbackId: feedback._id });
  } catch (err) {
    console.error("submitFeedback error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * GET /api/v1/feedback (admin / internal use)
 * Returns all feedback entries, optionally filtered by source.
 */
export const getFeedback = async (req, res) => {
  try {
    const { source } = req.query;
    const filter = source ? { source } : {};
    const items = await Feedback.find(filter).sort({ createdAt: -1 });
    return res.json({ success: true, count: items.length, data: items });
  } catch (err) {
    console.error("getFeedback error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
