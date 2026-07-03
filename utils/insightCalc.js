import { calculatePersonality as oldCalculate } from './personalityCalc.js';
import { getTraitInsights, getCombinationInsights } from '../data/INSIGHTS.V2.CLAUDE/insights.v4.engine.js';

/**
 * Wraps the old calculation logic (for scores and fallback archetype)
 * with the new V3 insights engine.
 * 
 * @param {Object} answers - Object mapping question ID (e.g., "q1") to Likert response (1 to 5).
 * @returns {Object} Rich insight payload containing scores, archetype, trait insights, and combinations.
 */
export function calculateV2Insights(answers) {
  // 1. Get raw scores and generic archetype from the original engine
  const oldResult = oldCalculate(answers);
  const scores = oldResult.scores;
  const archetype = oldResult.archetype; // We keep this for Card 1 (The Cover)

  // 2. Feed scores into V3 Engine
  const traitInsights = getTraitInsights(scores);
  const combinationInsights = getCombinationInsights(scores);

  // 3. Construct the new, rich payload
  return {
    scores,
    archetype,
    traitInsights,
    topCombinations: combinationInsights.default, // The top 4 pairs for the swipeable story
    detailedCombinations: combinationInsights.detailed // The remaining 6 pairs (unused for now but stored)
  };
}
