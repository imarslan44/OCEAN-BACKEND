const COMBINATION_INSIGHTS_OA = {
  "O+A": {
    "VH_VH": {
      title: "The Compassionate Visionary",
      summary: "Boundless curiosity paired with deep care for people — a rare combination that draws trust easily.",
      detail: "Very High Openness gives you constant interest in new ideas and perspectives. Very High Agreeableness means that curiosity is consistently aimed at understanding people, not just concepts. You listen generously and rarely judge quickly, which makes people open up to you in ways they don't with most others.",
      watch_out: "Your willingness to see every side can leave you without a strong stance of your own when one is actually needed. Some moments call for a clear position, not endless understanding."
    },
    "VH_H": {
      title: "The Empathetic Intellectual",
      summary: "Being equally curious about people and abstract ideas is a rare and powerful combination.",
      detail: "High Openness makes you hungry for deep knowledge, while High Agreeableness naturally applies that curiosity to understanding others. You genuinely want to understand people, rather than argue with them. Trust builds quickly because people feel your interest is authentic.",
      watch_out: "Agreeing too readily can cause you to lose your own voice. Not every opinion holds equal weight. Deep care for others might make you stay quiet when you should strongly disagree."
    },
    "VH_MH": {
      title: "The Curious Listener",
      summary: "An exceptionally active mind, applied generously to understanding the people around you.",
      detail: "Very High Openness keeps your thinking constantly expanding into new territory. Medium-High Agreeableness means you genuinely care about others without losing your own perspective in the process. You can hold a strong opinion and still listen well — a combination people find rare and valuable.",
      watch_out: "Your intellectual confidence can occasionally outpace your patience for views you find less interesting. Stay curious about the people whose ideas don't immediately impress you too."
    },
    "VH_ML": {
      title: "The Sharp Observer",
      summary: "Intensely curious, with a more measured, selective warmth toward people.",
      detail: "Very High Openness fuels constant exploration of new ideas and angles. Medium-Low Agreeableness means your warmth toward people is real but conditional — earned through genuine connection rather than given freely. You notice far more than you express.",
      watch_out: "People may read your selectivity as coldness even when it isn't meant that way. A bit more visible warmth would change how your intelligence is received."
    },
    "VH_L": {
      title: "The Direct Challenger",
      summary: "Challenging big ideas and the people who hold them happens naturally, and you rarely apologize for it.",
      detail: "High Openness creates a hunger for complex concepts. Low Agreeableness means you test those ideas by arguing and looking for hidden mistakes. The goal is rarely to hurt feelings; you simply want to find the exact truth. However, most people experience your style as aggressive, even when your intentions are purely logical.",
      watch_out: "Being perfectly right and being actually helpful are two distinct skills. Delivering a hard truth requires a gentle touch, and your direct style causes damage that could be avoided."
    },
    "VH_VL": {
      title: "The Relentless Skeptic",
      summary: "Extraordinary curiosity paired with almost no instinct to soften how you challenge people.",
      detail: "Very High Openness means you're constantly questioning, probing, and exploring new ideas. Very Low Agreeableness means you do this without much regard for how it lands emotionally — directness, even confrontation, comes naturally. Your thinking is sharp, but your delivery rarely accounts for the listener.",
      watch_out: "At this extreme, even correct points get dismissed because of how bluntly they're delivered. The accuracy of your thinking is being undermined by a complete lack of social cushioning."
    },
    "H_VH": {
      title: "The Generous Thinker",
      summary: "Real curiosity about ideas, expressed through deep, consistent warmth toward people.",
      detail: "High Openness keeps you engaged with new concepts and perspectives. Very High Agreeableness means your default mode with people is generous, accommodating, and trusting. You make others feel genuinely heard, and your intellectual curiosity rarely comes at the expense of kindness.",
      watch_out: "Your strong instinct to accommodate can mean your own sharper opinions get softened into near-invisibility. Practice stating a clear view without immediately cushioning it."
    },
    "H_H": {
      title: "The Empathetic Intellectual",
      summary: "Being equally curious about people and abstract ideas is a rare and powerful combination.",
      detail: "High Openness makes you hungry for deep knowledge, while High Agreeableness naturally applies that curiosity to understanding others. You genuinely want to understand people, rather than argue with them. Trust builds quickly because people feel your interest is authentic. This profile frequently belongs to great teachers, writers, and therapists.",
      watch_out: "Agreeing too readily can cause you to lose your own voice. Deep care for others might make you stay quiet when you should strongly disagree. Your perspective matters in the room."
    },
    "H_MH": {
      title: "The Open Collaborator",
      summary: "Curious and cooperative, balancing your own ideas with genuine respect for others'.",
      detail: "High Openness keeps you exploring new ideas regularly. Medium-High Agreeableness means you work well with people without losing track of your own perspective. You're the kind of collaborator who can disagree productively, because your care for the relationship is real but not all-consuming.",
      watch_out: "Your balance is generally healthy, but under pressure, you may default toward accommodation faster than the situation actually requires."
    },
    "H_ML": {
      title: "The Selective Connector",
      summary: "Treating people with warmth is conditional upon them offering interesting thoughts.",
      detail: "High Openness brings intense curiosity, but Medium-Low Agreeableness means you choose carefully who receives your kindness. Trying to be everyone's best friend is not your goal. When you find someone who thinks in fascinating ways, you invest heavily. If a person fails to stimulate your mind, your warm behavior fades quickly.",
      watch_out: "People who take time to show their intelligence rarely get to know the real you. Some relationships require more patience in the beginning than you naturally offer."
    },
    "H_L": {
      title: "The Sharp Critic",
      summary: "Genuinely curious, but inclined to challenge rather than accommodate the people around you.",
      detail: "High Openness gives you a strong appetite for new ideas and perspectives. Low Agreeableness means your default response to those ideas is critical evaluation, not gentle support. You push people's thinking hard, often productively, though rarely gently.",
      watch_out: "Your critiques are usually well-reasoned, but the lack of softening means they land harder than intended. A little more warmth wouldn't dilute your honesty — it would make it land better."
    },
    "H_VL": {
      title: "The Combative Intellectual",
      summary: "A genuinely curious mind, delivered with very little concern for how it affects others.",
      detail: "High Openness keeps you actively engaged with new and challenging ideas. Very Low Agreeableness means you express disagreement bluntly and often, with little instinct to soften the impact. You value being right over being liked, and it shows clearly in how you communicate.",
      watch_out: "At this level, even your best insights get lost behind how confrontational they feel to receive. The goal of a conversation is rarely just to be correct — it's to actually change someone's mind."
    },
    "MH_VH": {
      title: "The Warm Idealist",
      summary: "Reasonably curious, but it's your deep care for people that defines how you show up.",
      detail: "Medium-High Openness keeps you reasonably open to new perspectives. Very High Agreeableness means kindness and accommodation are close to automatic for you — you prioritize harmony and others' comfort consistently. People trust you quickly because your warmth feels unconditional.",
      watch_out: "Such strong accommodation can mean your own needs and opinions get repeatedly deprioritized. Over time, that imbalance catches up with you, even if it doesn't feel that way day to day."
    },
    "MH_H": {
      title: "The Curious Cooperator",
      summary: "Warm, easy to work with, and much smarter than you let people see.",
      detail: "High Agreeableness makes you a great team player who values peace. Medium-High Openness means real curiosity exists underneath. You notice small details and grasp complex ideas perfectly. People are sometimes surprised by your sharp thoughts because they primarily view you as a nice, helpful person.",
      watch_out: "Politeness comes so easily that it often conceals your best ideas. Ensure your kindness is not silencing your sharpest thoughts."
    },
    "MH_MH": {
      title: "The Easy Collaborator",
      summary: "A comfortable, balanced mix of curiosity and warmth that makes you easy to work with.",
      detail: "Medium-High Openness and Medium-High Agreeableness combine into someone reasonably open-minded and reasonably accommodating, without either trait dominating. You contribute ideas without forcing them, and support others without disappearing into the background.",
      watch_out: "This comfortable middle ground can mean you rarely push hard enough — for your own ideas or for necessary disagreements."
    },
    "MH_ML": {
      title: "The Measured Realist",
      summary: "Reasonably curious, with warmth that's genuine but not automatic.",
      detail: "Medium-High Openness gives you steady interest in new ideas. Medium-Low Agreeableness means your support for people is real but earned, not given freely upfront. You're fair and thoughtful, without bending over backward to keep everyone comfortable.",
      watch_out: "Your measured approach can read as detached to people expecting more immediate warmth. A bit more visible engagement early on would help relationships start faster."
    },
    "MH_L": {
      title: "The Reasoned Skeptic",
      summary: "Open to new ideas, but rarely inclined to soften disagreement for the sake of comfort.",
      detail: "Medium-High Openness keeps your thinking flexible and exploratory. Low Agreeableness means you challenge ideas and people fairly directly, without much instinct to cushion the impact. You're not hostile, just unwilling to pretend agreement you don't feel.",
      watch_out: "Directness without occasional warmth can make people defensive before they even hear your actual point. Lead with curiosity about their view before delivering your critique."
    },
    "MH_VL": {
      title: "The Blunt Thinker",
      summary: "Reasonably curious, but almost entirely unwilling to soften how you express disagreement.",
      detail: "Medium-High Openness gives you a fair appetite for new perspectives. Very Low Agreeableness means your honesty comes out raw, with little concern for how it's received. You say what you think, plainly, regardless of the room.",
      watch_out: "At this level, your bluntness likely costs you more relationships and opportunities than you realize. The message is often right; the delivery is what's failing you."
    },
    "ML_VH": {
      title: "The Devoted Traditionalist",
      summary: "Practical-minded, but defined by deep warmth and care for the people around you.",
      detail: "Medium-Low Openness means you trust familiar, tested ways of thinking. Very High Agreeableness means kindness and accommodation come naturally and constantly. You're the person others lean on, not because you're flashy, but because your care is consistent and real.",
      watch_out: "Constant accommodation can mean your own preferences quietly disappear over time. Practice naming what you actually want, even when it's easier to defer."
    },
    "ML_H": {
      title: "The Grounded Helper",
      summary: "Practical rather than experimental, with real warmth toward the people you work with.",
      detail: "Medium-Low Openness keeps your interests fairly familiar and consistent. High Agreeableness means you genuinely care about getting along and supporting others. You're dependable in both your thinking and your relationships, valued more for consistency than for new ideas.",
      watch_out: "Your steadiness can make you the default choice for routine support rather than meaningful collaboration. Make sure people know you're capable of more than just being agreeable."
    },
    "ML_MH": {
      title: "The Reliable Teammate",
      summary: "Practical and reasonably warm — an easy, low-friction presence in most groups.",
      detail: "Medium-Low Openness keeps you grounded in familiar, proven approaches. Medium-High Agreeableness means you cooperate easily and care about maintaining good relationships, without being a pushover. You're generally easy to work with and trusted to keep things smooth.",
      watch_out: "Easy cooperation can sometimes mean avoiding necessary friction even when it would actually help the group."
    },
    "ML_ML": {
      title: "The Balanced Adapter",
      summary: "Shifting between deep thinking and warm teamwork happens exactly when needed.",
      detail: "Neither extreme dictates your behavior. You argue about complex ideas when useful, and offer strong support when someone needs a friend. You are not locked into being strictly a fighter or a peacemaker. This balance makes you highly effective in diverse situations.",
      watch_out: "Adapting so well means you might never push yourself to be truly exceptional in one specific direction."
    },
    "ML_L": {
      title: "The Independent Realist",
      summary: "Genuine curiosity drives you, and softening your words to comfort others is rarely a priority.",
      detail: "Medium-Low Openness means you enjoy learning about specific interests. Low Agreeableness means sugarcoating thoughts is not your style. You say what you think, question what you doubt, and spend little energy worrying about how your words make others feel.",
      watch_out: "Brutal honesty without warmth pushes people away. Your ideas might be brilliant, but if delivered coldly, very few people will stay around long enough to listen."
    },
    "ML_VL": {
      title: "The Unfiltered Pragmatist",
      summary: "Practical-minded, and almost entirely unconcerned with softening how you come across.",
      detail: "Medium-Low Openness keeps you focused on familiar, tested approaches. Very Low Agreeableness means you express disagreement or criticism with little to no filtering. You're consistent in your views, and equally consistent in not adjusting them for anyone's comfort.",
      watch_out: "This combination tends to isolate people over time, regardless of how reasonable the underlying thinking is. The cost of zero social cushioning is usually higher than it feels in the moment."
    },
    "L_VH": {
      title: "The Steady Teammate",
      summary: "Reliability and warmth define you, and you are happiest when life stays friendly and predictable.",
      detail: "Low Openness keeps you away from chaotic changes or strange ideas. Very High Agreeableness means you care deeply about the people you work with. You act as the glue that holds a team together. Trust builds because you show up, do your job, and keep everyone feeling supported.",
      watch_out: "Teams focused only on harmony eventually stumble. Sometimes, pointing out a difficult truth is necessary. A fear of conflict usually stops you."
    },
    "L_H": {
      title: "The Dependable Supporter",
      summary: "Consistent and warm, valued for showing up reliably for the people around you.",
      detail: "Low Openness keeps your approach steady and familiar. High Agreeableness means you genuinely prioritize others' wellbeing and comfort. You're a stabilizing, supportive presence — not because you're trying to impress anyone, but because care comes naturally to you.",
      watch_out: "Your discomfort with conflict can mean real issues go unaddressed for far too long. Practice raising concerns earlier, before they require more difficult conversations later."
    },
    "L_MH": {
      title: "The Steady Collaborator",
      summary: "Comfortable with the familiar, and reasonably warm toward the people you work with.",
      detail: "Low Openness keeps your thinking grounded in proven, tested approaches. Medium-High Agreeableness means you cooperate well and generally prioritize good relationships without losing your own footing entirely. You're a stable, trustworthy presence in most settings.",
      watch_out: "Comfort with the familiar extends to people too — you may stick with known relationships rather than building new ones."
    },
    "L_ML": {
      title: "The Pragmatic Individual",
      summary: "Thinking practically, showing moderate warmth, and avoiding the spotlight is your standard mode.",
      detail: "Low Openness means trusting proven facts and ignoring wild theories. Medium-Low Agreeableness means getting along with people without stressing over their feelings excessively. You are highly consistent and practical, making it clear exactly what others can expect from you.",
      watch_out: "High predictability is excellent, but people might mistakenly assume you lack deep thoughts. There is likely much more going on inside your head than you present to the world."
    },
    "L_L": {
      title: "The Firm Pragmatist",
      summary: "Being set in your ways and highly direct suits you, and you see no reason to change.",
      detail: "Low Openness means new theories or strange ideas hold no interest. Low Agreeableness means changing your behavior to please others does not happen. You operate with strict rules for how things should be done and lose patience with those who work differently.",
      watch_out: "Total control is rarely given freely; it must be earned. Learning the art of compromise is eventually necessary for larger success."
    },
    "L_VL": {
      title: "The Hardened Conventional",
      summary: "Resistant to new ideas, and almost entirely unconcerned with accommodating others.",
      detail: "Low Openness keeps you firmly anchored to familiar, tested ways of doing things. Very Low Agreeableness means you express disagreement bluntly, without much instinct to soften it. You hold your ground firmly, in both your methods and your opinions.",
      watch_out: "This combination makes collaboration genuinely difficult, since both flexibility and warmth are in short supply."
    },
    "VL_VH": {
      title: "The Unwavering Caretaker",
      summary: "Deep resistance to new ideas, balanced by deep, consistent warmth toward people.",
      detail: "Very Low Openness keeps your world fixed and predictable. Very High Agreeableness means your care for others is constant and genuine, regardless of how unconventional or familiar the situation is. People trust you completely, even if they don't come to you for new ideas.",
      watch_out: "Your steady warmth can mean you accommodate people even when their requests or behavior should actually be challenged. Care and boundaries aren't opposites — you'll need both."
    },
    "VL_H": {
      title: "The Loyal Traditionalist",
      summary: "Set in your ways, but warm and dependable toward the people you trust.",
      detail: "Very Low Openness means change rarely appeals to you. High Agreeableness means you treat the people in your life with real, consistent care. You're the reliable, familiar presence people count on, even if you rarely surprise them with anything new.",
      watch_out: "Loyalty to the familiar can extend to tolerating situations or people that no longer serve you well."
    },
    "VL_MH": {
      title: "The Settled Helper",
      summary: "Comfortable with routine, and reasonably warm toward the people around you.",
      detail: "Very Low Openness keeps you anchored to known, tested ways of living. Medium-High Agreeableness means you generally prioritize getting along and supporting others, without being a pushover. Life stays steady, familiar, and reasonably warm.",
      watch_out: "This steadiness works well until change becomes unavoidable. Build a little more tolerance for the unfamiliar before it's forced on you by circumstance."
    },
    "VL_ML": {
      title: "The Quiet Pragmatist",
      summary: "Resistant to new ideas, with warmth that's present but not particularly active.",
      detail: "Very Low Openness keeps your world fixed and unsurprising. Medium-Low Agreeableness means you cooperate reasonably but don't go out of your way to accommodate others. You live a fairly self-contained, low-drama life.",
      watch_out: "This narrow stability can quietly limit both your growth and your relationships without you noticing."
    },
    "VL_L": {
      title: "The Rigid Individualist",
      summary: "Strong preference for the familiar, with little instinct to accommodate others.",
      detail: "Very Low Openness means new ideas or approaches rarely get a fair hearing. Low Agreeableness means you don't adjust your behavior much to keep others comfortable. You operate firmly on your own terms, in both thinking and relationships.",
      watch_out: "This combination makes you genuinely difficult to collaborate with over time. The rigidity that feels protective to you often reads as inflexibility to everyone else."
    },
    "VL_VL": {
      title: "The Immovable Skeptic",
      summary: "Maximum resistance to new ideas, paired with almost no instinct to accommodate people.",
      detail: "Very Low Openness shuts down new ideas before they're considered. Very Low Agreeableness means you express disagreement bluntly, without softening for anyone's comfort. This is the most resistant, least accommodating profile in this combination — firm in belief, firm in delivery.",
      watch_out: "At this extreme, both growth and collaboration become genuinely difficult. Almost nothing changes your mind, and almost nothing about your delivery makes that easier for others to accept."
    }
  }
};

export default COMBINATION_INSIGHTS_OA;
