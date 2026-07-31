import { calculatePersonality as oldCalculate } from './personalityCalc.js';
import { getTraitInsights, getCombinationInsights } from '../data/INSIGHTS.V2.CLAUDE/insights.v4.engine.js';

/**
 * Wraps the old calculation logic (for scores and fallback archetype)
 * with the new V3 insights engine.
 * 
 * @param {Object} answers - Object mapping question ID (e.g., "q1") to Likert response (1 to 5).
 * @returns {Object} Rich insight payload containing scores, archetype, trait insights, and combinations.
 */
export function calculateV2Insights(answers = {}) {
  const safeAnswers = answers && typeof answers === 'object' ? answers : {};
  // 1. Get raw scores and generic archetype from the original engine
  const oldResult = oldCalculate(safeAnswers);
  const scores = oldResult?.scores || { O: 50, C: 50, E: 50, A: 50, N: 50 };
  const archetype = oldResult?.archetype || {
    title: "The Balanced Centrist",
    description: "You possess a balanced personality profile.",
    strengths: ["Flexibility", "Adaptability"],
    blindspots: ["Indecision"]
  };

  // 2. Feed scores into V3 Engine
  const traitInsights = getTraitInsights ? getTraitInsights(scores) : [];
  const combinationInsights = getCombinationInsights ? getCombinationInsights(scores) : { default: [], detailed: [] };

  // 3. Construct the new, rich payload
  return {
    scores,
    archetype,
    traitInsights: traitInsights || [],
    topCombinations: combinationInsights?.default || [],
    detailedCombinations: combinationInsights?.detailed || []
  };
}
