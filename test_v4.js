import { getTraitInsights, getCombinationInsights } from './data/insights.v4.engine.js';

const scores = { O: 90, C: 73, E: 53, A: 80, N: 65 };

console.log("\n━━━ INDIVIDUAL TRAIT INSIGHTS ━━━");
const traits = getTraitInsights(scores);
Object.values(traits).forEach(t => {
  console.log(`\n${t.name} - ${t.score}% - ${t.range} - (${t.confidence} confidence)`);
  console.log(`  Title:     ${t.title}`);
  console.log(`  Summary:   ${t.summary}`);
});

console.log("\n━━━ DEFAULT COMBINATIONS (4) ━━━");
const combos = getCombinationInsights(scores);
combos.default.forEach((c, i) => {
  console.log(`\n[${i + 1}] ${c.pair} - ${c.rangeKey} - ${c.confidence} confidence`);
  console.log(`  Title:     ${c.title}`);
});
