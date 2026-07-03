"use strict";

import COMBINATION_INSIGHTS_AN from './combination_insights_AN.js';
import COMBINATION_INSIGHTS_CA from './combination_insights_CA.js';
import COMBINATION_INSIGHTS_CE from './combination_insights_CE.js';
import COMBINATION_INSIGHTS_CN from './combination_insights_CN.js';
import COMBINATION_INSIGHTS_EA from './combination_insights_EA.js';
import COMBINATION_INSIGHTS_EN from './combination_insights_EN.js';
import COMBINATION_INSIGHTS_OA from './combination_insights_OA.js';
import COMBINATION_INSIGHTS_OC from './combination_insights_OC.js';
import COMBINATION_INSIGHTS_OE from './combination_insights_OE.js';
import COMBINATION_INSIGHTS_ON from './combination_insights_ON.js';
import TRAIT_INSIGHTS from './trait_insights.js';

// ─────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────

const TRAITS = ["O", "C", "E", "A", "N"];

const TRAIT_NAMES = {
  O: "Openness",
  C: "Conscientiousness",
  E: "Extraversion",
  A: "Agreeableness",
  N: "Neuroticism",
};

// Canonical pair list — always in OCEAN position order.
// Used so 'C+O' and 'O+C' always resolve to the same key.
const ALL_PAIRS = [
  "O+C", "O+E", "O+A", "O+N",
  "C+E", "C+A", "C+N",
  "E+A", "E+N",
  "A+N",
];

const HIGH = 60; // score >= 60  -> High
const LOW  = 40; // score <  40  -> Low
                 // 40–59        -> Mid

const COMBINATION_INSIGHTS = {
  ...COMBINATION_INSIGHTS_AN,
  ...COMBINATION_INSIGHTS_CA,
  ...COMBINATION_INSIGHTS_CE,
  ...COMBINATION_INSIGHTS_CN,
  ...COMBINATION_INSIGHTS_EA,
  ...COMBINATION_INSIGHTS_EN,
  ...COMBINATION_INSIGHTS_OA,
  ...COMBINATION_INSIGHTS_OC,
  ...COMBINATION_INSIGHTS_OE,
  ...COMBINATION_INSIGHTS_ON,
};

// ─────────────────────────────────────────────
// UTILITY FUNCTIONS
// ─────────────────────────────────────────────

function getRange(score) {
  const distance = Math.abs(score - 50);
  const confidence = distance >= 30 ? "high" : distance >= 15 ? "mid" : "low";

  let range = "";
  if (score >= 84) range = "VH";
  else if (score >= 67) range = "H";
  else if (score >= 50) range = "MH";
  else if (score >= 34) range = "ML";
  else if (score >= 17) range = "L";
  else range = "VL";

  return { range, confidence, distance };
}

function validateScores(scores) {
  const missing = TRAITS.filter(t => scores[t] === undefined || scores[t] === null);
  if (missing.length) throw new Error(`Missing trait scores: ${missing.join(", ")}`);

  const invalid = TRAITS.filter(t => typeof scores[t] !== "number" || scores[t] < 0 || scores[t] > 100);
  if (invalid.length) throw new Error(`Scores must be numbers 0-100. Invalid: ${invalid.join(", ")}`);
}

function normalizePair(t1, t2) {
  const order = { O: 0, C: 1, E: 2, A: 3, N: 4 };
  return order[t1] <= order[t2] ? `${t1}+${t2}` : `${t2}+${t1}`;
}

function rankByExtremity(scores) {
  return [...TRAITS].sort((a, b) => Math.abs(scores[b] - 50) - Math.abs(scores[a] - 50));
}

function pairConfidence(r1, r2) {
  const m1 = r1.includes("M");
  const m2 = r2.includes("M");
  if (m1 && m2) return "low";
  if (m1 || m2) return "medium";
  return "high";
}

// ─────────────────────────────────────────────
// MAIN FUNCTION 1: getTraitInsights
// ─────────────────────────────────────────────

function getTraitInsights(scores) {
  validateScores(scores);

  const result = {};

  TRAITS.forEach(trait => {
    const { range, confidence, distance } = getRange(scores[trait]);
    const content = TRAIT_INSIGHTS[trait][range];

    result[trait] = {
      trait,
      name:      TRAIT_NAMES[trait],
      score:     scores[trait],
      range,            // "H" | "M" | "L"
      confidence,       // "high" | "mid" | "low"
      distance,         // 0-50, how far from the midpoint
      title:     content.title,
      summary:   content.summary,
      detail:    content.detail,
      watch_out: content.watch_out,
    };
  });

  return result;
}

// ─────────────────────────────────────────────
// MAIN FUNCTION 2: getCombinationInsights
// ─────────────────────────────────────────────

function getCombinationInsights(scores) {
  validateScores(scores);

  // Classify all 5 traits once up front
  const ranges = {};
  TRAITS.forEach(t => { ranges[t] = getRange(scores[t]); });

  // Build all 10 combination insight cards
  const allCards = ALL_PAIRS.map(pair => {
    const [t1, t2]  = pair.split("+");
    const r1        = ranges[t1].range;
    const r2        = ranges[t2].range;
    const rangeKey  = `${r1}_${r2}`;
    const content   = COMBINATION_INSIGHTS[pair]?.[rangeKey];
    const conf       = pairConfidence(r1, r2);
    const extremity  = ranges[t1].distance + ranges[t2].distance;

    return {
      pair,
      traits: {
        [t1]: { name: TRAIT_NAMES[t1], score: scores[t1], range: r1 },
        [t2]: { name: TRAIT_NAMES[t2], score: scores[t2], range: r2 },
      },
      rangeKey,           // e.g. "HM", "LL", "MH" — useful for debugging/QA
      confidence:  conf,  // "high" | "medium" | "low"
      extremity,          // higher = more relevant / sharper signal for this user
      title:       content?.title     || "Insight Unavailable",
      summary:     content?.summary   || "",
      detail:      content?.detail    || "",
      watch_out:   content?.watch_out || "",
    };
  });

  // Rank: confidence first, then by combined extremity of both traits
  const ranked = [...allCards].sort((a, b) => {
    const confOrder = { high: 3, medium: 2, low: 1 };
    if (confOrder[b.confidence] !== confOrder[a.confidence]) {
      return confOrder[b.confidence] - confOrder[a.confidence];
    }
    return b.extremity - a.extremity;
  });

  // Select the 4 "default" pairs from this user's 3 most extreme traits.
  // top3 traits -> 3 pairs between them, plus a 4th pair anchored on the
  // single most extreme trait paired with the 4th-ranked trait.
  const rankedTraits = rankByExtremity(scores);
  const top3         = rankedTraits.slice(0, 3);

  const defaultPairSet = new Set([
    normalizePair(top3[0], top3[1]),
    normalizePair(top3[0], top3[2]),
    normalizePair(top3[1], top3[2]),
    normalizePair(rankedTraits[0], rankedTraits[3]),
  ]);

  const defaultCards  = [];
  const detailedCards = [];

  for (const card of ranked) {
    if (defaultPairSet.has(card.pair) && defaultCards.length < 4) {
      defaultCards.push(card);
    } else {
      detailedCards.push(card);
    }
  }

  // Edge case safety net: if the set produced fewer than 4 unique pairs
  // (can happen with ties), fill remaining default slots from the top
  // of the ranked list so the UI always gets exactly 4.
  while (defaultCards.length < 4 && detailedCards.length > 0) {
    defaultCards.push(detailedCards.shift());
  }

  return {
    default:  defaultCards,   // 4 cards — show immediately
    detailed: detailedCards,  // 6 cards — show in expanded view
    all:      ranked,         // all 10, fully ranked
  };
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

export { getTraitInsights, getCombinationInsights, TRAIT_NAMES, ALL_PAIRS, getRange };
