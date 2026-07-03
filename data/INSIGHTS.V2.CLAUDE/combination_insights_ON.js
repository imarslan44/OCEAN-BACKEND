const COMBINATION_INSIGHTS_ON = {
  "O+N": {
    "VH_VH": {
      title: "The Stormy Visionary",
      summary: "Your mind is as emotionally intense as it is imaginative — both a gift and a genuine challenge.",
      detail: "Very High Openness gives you access to vivid imagination, deep curiosity, and a rich inner life. Very High Neuroticism means that inner life is also emotionally loud — worry, doubt, and intense feeling color much of what you create and think about. The combination can produce extraordinary creative or reflective work, but it rarely comes without real emotional cost.",
      watch_out: "Without active management, this combination tips easily into rumination — replaying anxious thoughts rather than channeling them into something productive. Build a concrete outlet before the spiral builds momentum."
    },
    "VH_H": {
      title: "The Sensitive Dreamer",
      summary: "A vivid imagination paired with real emotional sensitivity to how things might go wrong.",
      detail: "Very High Openness fuels your curiosity and creative thinking constantly. High Neuroticism means you also feel things intensely, often worrying about outcomes before they happen. Your imagination doesn't just generate ideas — it generates emotional scenarios too, for better and worse.",
      watch_out: "Imagining what could go wrong is useful preparation up to a point, then it becomes its own source of stress. Notice when you've crossed from planning into spiraling."
    },
    "VH_MH": {
      title: "The Reflective Worrier",
      summary: "Curiosity runs deep, and so does a tendency to feel things more than most.",
      detail: "Very High Openness gives you an active, exploratory mind. Medium-High Neuroticism means emotional sensitivity is real but more manageable than at the extremes — you feel deeply without being constantly overwhelmed. You process experiences thoughtfully, sometimes too thoroughly.",
      watch_out: "Overthinking is the natural risk here — turning a simple situation into something to analyze from every emotional angle. Some things genuinely don't need that much processing."
    },
    "VH_ML": {
      title: "The Grounded Explorer",
      summary: "A curious, imaginative mind that mostly stays emotionally steady.",
      detail: "Very High Openness keeps your thinking expansive and exploratory. Medium-Low Neuroticism means you handle most stress reasonably well, without it derailing your thinking. You can sit with big, uncertain ideas without spiraling into anxiety about them.",
      watch_out: "Your general steadiness can occasionally mean you underestimate how a situation is actually affecting you until it builds up. Check in with yourself honestly, not just intellectually."
    },
    "VH_L": {
      title: "The Calm Visionary",
      summary: "Exceptional imagination, delivered without the emotional volatility that often comes with it.",
      detail: "Very High Openness gives you constant access to new ideas, possibilities, and perspectives. Low Neuroticism means you process all of this with real emotional steadiness — setbacks and uncertainty don't shake you easily. This combination is genuinely rare and valuable for sustained creative or intellectual work.",
      watch_out: "Emotional steadiness can sometimes mean underestimating how a situation feels to people who don't share your resilience. Stay attentive to others' emotional reality, even when it's not your own."
    },
    "VH_VL": {
      title: "The Unshakeable Dreamer",
      summary: "Boundless imagination combined with near-total emotional steadiness, even under real pressure.",
      detail: "Very High Openness fuels constant creative and intellectual exploration. Very Low Neuroticism means almost nothing emotionally destabilizes you — stress, criticism, and uncertainty roll off you easily. This is an unusually resilient profile for creative or high-stakes work.",
      watch_out: "At this level of emotional steadiness, you may underread how much something is actually bothering someone else, since it wouldn't bother you. Don't assume your calm is universal."
    },
    "H_VH": {
      title: "The Anxious Idealist",
      summary: "Genuine creative curiosity, frequently overshadowed by intense emotional reactivity.",
      detail: "High Openness gives you real interest in new ideas and perspectives. Very High Neuroticism means emotional intensity dominates much of your experience — worry, self-doubt, and stress are frequent companions, often louder than the curiosity itself.",
      watch_out: "At this level, anxiety can crowd out the very creativity that defines you. Addressing the emotional intensity directly will likely unlock more of your actual potential than any amount of willpower."
    },
    "H_H": {
      title: "The Restless Thinker",
      summary: "A genuinely curious mind that also worries more than most.",
      detail: "High Openness keeps you engaged with new ideas and possibilities. High Neuroticism means you process much of that exploration through an anxious lens — what could go wrong gets as much attention as what could go right. Your thinking is rich, but rarely calm.",
      watch_out: "The worry that accompanies your curiosity can quietly drain the joy out of exploring new ideas. Practice separating genuine risk from imagined worst cases."
    },
    "H_MH": {
      title: "The Sensitive Explorer",
      summary: "Curious and reasonably steady, though emotional undercurrents still shape how you process things.",
      detail: "High Openness keeps your thinking active and exploratory. Medium-High Neuroticism means you feel things moderately intensely — not constantly anxious, but not unaffected either. You notice emotional nuance that others miss, in yourself and in situations.",
      watch_out: "Your sensitivity is an asset for noticing nuance, but it can also mean small setbacks register larger than they need to. Calibrate your emotional response to the actual size of the problem."
    },
    "H_ML": {
      title: "The Even-Keeled Thinker",
      summary: "Curious and exploratory, with emotional reactions that stay mostly proportionate.",
      detail: "High Openness gives you a steady appetite for new ideas. Medium-Low Neuroticism means you generally process setbacks and uncertainty without major emotional swings. You can explore difficult or ambiguous topics without it costing you much emotionally.",
      watch_out: "Your general steadiness is real, but don't mistake it for invulnerability — pay attention to the rare moments when something does genuinely affect you."
    },
    "H_L": {
      title: "The Composed Thinker",
      summary: "Genuinely curious, and emotionally steady enough to explore difficult ideas without much disturbance.",
      detail: "High Openness keeps you engaged and exploratory. Low Neuroticism means stress and uncertainty rarely throw you off course. You can sit with ambiguous or unsettling ideas calmly, which makes you a useful, grounding presence when others are anxious.",
      watch_out: "Your calm can occasionally read as detachment to people who are genuinely struggling. Make sure your steadiness comes across as support, not indifference."
    },
    "H_VL": {
      title: "The Unbothered Thinker",
      summary: "Real curiosity, paired with emotional steadiness that's hard to shake.",
      detail: "High Openness keeps your mind active and engaged with new ideas. Very Low Neuroticism means very little emotionally destabilizes you — criticism, uncertainty, even real setbacks rarely produce much internal disturbance. You explore difficult territory with remarkable ease.",
      watch_out: "At this level of steadiness, you may struggle to fully relate to people who are genuinely anxious or overwhelmed. Empathy for emotional struggle may need to be intentional rather than instinctive."
    },
    "MH_VH": {
      title: "The Worried Mind",
      summary: "Reasonably curious, but it's emotional intensity that dominates your inner experience.",
      detail: "Medium-High Openness gives you a fair appetite for new ideas, though it's often overshadowed. Very High Neuroticism means worry, self-doubt, and emotional reactivity are frequent and intense. Much of your mental energy goes toward managing feelings rather than exploring ideas.",
      watch_out: "At this intensity, the emotional load is likely affecting far more of your life than just your thinking. This is worth addressing directly, with real support, rather than working around it."
    },
    "MH_H": {
      title: "The Cautious Curious",
      summary: "Open to new ideas, but consistently aware of what could go wrong.",
      detail: "Medium-High Openness keeps you reasonably engaged with new possibilities. High Neuroticism means that engagement comes with real emotional weight — anxiety about outcomes is a near-constant companion. You think things through carefully, partly because the alternative feels too uncertain.",
      watch_out: "Your caution is informed by real feeling, but it can also stop you from acting on good ideas simply because the anxiety feels too loud. Notice when worry is the only thing actually stopping you."
    },
    "MH_MH": {
      title: "The Reflective Mind",
      summary: "A balanced mix of curiosity and emotional sensitivity that's manageable most of the time.",
      detail: "Medium-High Openness and Medium-High Neuroticism combine into someone who explores ideas readily while also feeling things moderately intensely. Neither trait overwhelms the other most days, giving you a thoughtful, occasionally worried, generally functional inner life.",
      watch_out: "Under real stress, this balance can tip — and it's worth knowing in advance what tips it, so you can catch it early."
    },
    "MH_ML": {
      title: "The Steady Thinker",
      summary: "Curious in a measured way, with emotions that mostly stay proportionate.",
      detail: "Medium-High Openness keeps your thinking reasonably exploratory. Medium-Low Neuroticism means you generally handle stress and uncertainty without major disruption. You're thoughtful without being especially anxious about it.",
      watch_out: "Your general stability is real, but it can mean you don't always notice early signs of stress building up in yourself until it's more pronounced."
    },
    "MH_L": {
      title: "The Settled Mind",
      summary: "Reasonably curious, and largely unbothered by the emotional weight of uncertainty.",
      detail: "Medium-High Openness gives you a fair interest in new ideas and perspectives. Low Neuroticism means you process uncertainty and setbacks without much emotional disruption. You're a generally calm, even presence.",
      watch_out: "Calm is an asset, but make sure it's not crowding out genuine emotional engagement with things that actually deserve your attention."
    },
    "MH_VL": {
      title: "The Unflappable Thinker",
      summary: "Reasonably open-minded, with remarkable emotional steadiness underneath.",
      detail: "Medium-High Openness keeps you reasonably engaged with new ideas. Very Low Neuroticism means almost nothing destabilizes you emotionally — you're a calm, steady presence regardless of circumstance. This combination handles pressure unusually well.",
      watch_out: "At this level of steadiness, others' emotional reactions may genuinely puzzle you. Stay mindful that not everyone shares your resilience."
    },
    "ML_VH": {
      title: "The Practical Worrier",
      summary: "Grounded in the familiar, but carrying significant emotional intensity underneath.",
      detail: "Medium-Low Openness keeps your interests fairly concrete and practical. Very High Neuroticism means anxiety and emotional reactivity are frequent, often centered on real, tangible concerns rather than abstract ones. Your worry tends to be specific, not philosophical.",
      watch_out: "At this intensity, the anxiety is likely affecting your daily functioning more than you'd want. Concrete, practical support tends to help this profile most."
    },
    "ML_H": {
      title: "The Concerned Realist",
      summary: "Practical-minded, with real emotional sensitivity to things going wrong.",
      detail: "Medium-Low Openness keeps you focused on tested, familiar approaches. High Neuroticism means you carry real concern about outcomes, often centered on practical matters — finances, health, relationships. Your worry is grounded, not abstract, which makes it easier to address directly.",
      watch_out: "Grounded worry is still worry, and at this level it likely costs you more peace of mind than it earns you in preparation. Some of what you're anxious about may need direct action, not more thinking."
    },
    "ML_MH": {
      title: "The Cautious Pragmatist",
      summary: "Practical and reasonably steady, though concern about outcomes is a regular presence.",
      detail: "Medium-Low Openness keeps your focus grounded and familiar. Medium-High Neuroticism means moderate emotional sensitivity, particularly around things that feel uncertain or out of your control. You manage it reasonably well most days.",
      watch_out: "Your worry tends to be practical, which is useful, but make sure it's translating into action rather than just repeated concern."
    },
    "ML_ML": {
      title: "The Steady Pragmatist",
      summary: "Practical and emotionally even, handling most situations without much disruption.",
      detail: "Medium-Low Openness and Medium-Low Neuroticism combine into a grounded, stable profile. You're not chasing novel ideas, and you're not particularly prone to emotional swings either. Life feels manageable most of the time.",
      watch_out: "This stability is genuinely useful, but check that it isn't masking a lack of engagement with things that actually deserve more feeling."
    },
    "ML_L": {
      title: "The Unbothered Realist",
      summary: "Practical-minded and emotionally steady — not much rattles you.",
      detail: "Medium-Low Openness keeps your interests grounded and familiar. Low Neuroticism means stress and uncertainty rarely affect you much. You move through practical challenges calmly, without unnecessary emotional weight.",
      watch_out: "Your calm is an asset in a crisis, but make sure you're not also calm about things that genuinely warrant more concern or attention."
    },
    "ML_VL": {
      title: "The Rock-Solid Pragmatist",
      summary: "Grounded interests and remarkable emotional steadiness, even under real pressure.",
      detail: "Medium-Low Openness keeps your focus practical and familiar. Very Low Neuroticism means almost nothing emotionally destabilizes you, even in genuinely difficult circumstances. You're the person others lean on precisely because you don't rattle easily.",
      watch_out: "Your steadiness can sometimes come across as underreacting to situations that genuinely call for visible concern. People may need you to show more, even if you don't feel more."
    },
    "L_VH": {
      title: "The Anxious Traditionalist",
      summary: "Comfortable with the familiar, but carrying real emotional intensity beneath the surface.",
      detail: "Low Openness keeps your world predictable and unsurprising by choice. Very High Neuroticism means that predictability is partly a coping mechanism — change and uncertainty trigger real anxiety. Routine isn't just preference for you; it's protective.",
      watch_out: "At this intensity, your need for predictability may be limiting your life more than it's protecting you. Addressing the underlying anxiety directly would likely open up more options than sticking to routine ever will."
    },
    "L_H": {
      title: "The Careful Conventional",
      summary: "Sticking to the familiar feels safest, and emotional sensitivity reinforces that preference.",
      detail: "Low Openness means you naturally prefer tested, predictable approaches. High Neuroticism means uncertainty genuinely unsettles you, which reinforces your pull toward the familiar. The two traits feed each other — caution breeds more caution.",
      watch_out: "This cycle can quietly shrink your world over time, as more things start to feel like risks worth avoiding. Small, deliberate exposure to manageable uncertainty would help break the pattern."
    },
    "L_MH": {
      title: "The Wary Realist",
      summary: "Comfortable with routine, with a moderate undercurrent of concern about change.",
      detail: "Low Openness keeps you anchored to familiar, tested ways of doing things. Medium-High Neuroticism means you feel some real apprehension about uncertainty, though it's manageable rather than overwhelming. You prefer the safe path, and you have real reasons for it.",
      watch_out: "Your caution is reasonable, but make sure it's not quietly ruling out opportunities that are actually worth the discomfort."
    },
    "L_ML": {
      title: "The Settled Conventional",
      summary: "Comfortable with routine and largely steady emotionally.",
      detail: "Low Openness keeps your world predictable by preference. Medium-Low Neuroticism means you handle most stress reasonably well, without major emotional swings. Your preference for the familiar is mostly about comfort, not anxiety.",
      watch_out: "Comfort with the familiar is fine, but periodically check whether it's genuinely serving you or just easier to default to."
    },
    "L_L": {
      title: "The Unshaken Traditionalist",
      summary: "Comfortable with the familiar, and emotionally steady enough that change wouldn't unsettle you much either.",
      detail: "Low Openness keeps you anchored in predictable, tested ways of living. Low Neuroticism means you'd likely handle change fine if it came, even though you don't seek it out. Your preference for routine is genuinely just preference, not protection.",
      watch_out: "Since change wouldn't actually unsettle you, consider whether sticking rigidly to routine is really serving you, or just inertia."
    },
    "L_VL": {
      title: "The Rock-Steady Conventional",
      summary: "Strong preference for the familiar, paired with exceptional emotional steadiness.",
      detail: "Low Openness keeps your world predictable by choice. Very Low Neuroticism means almost nothing rattles you, even significant change or pressure. This is a genuinely resilient, low-drama profile, even if it's not particularly adventurous.",
      watch_out: "Your steadiness means you could likely handle far more change or challenge than you currently take on. Comfort isn't a limit you need to respect if growth is something you actually want."
    },
    "VL_VH": {
      title: "The Fragile Traditionalist",
      summary: "Deep resistance to change, intertwined with significant emotional vulnerability.",
      detail: "Very Low Openness means unfamiliar situations feel deeply uncomfortable. Very High Neuroticism means that discomfort often escalates into real anxiety or distress. Routine isn't just a preference here — it's a primary way of managing intense emotional sensitivity.",
      watch_out: "This combination benefits significantly from direct support — addressing the anxiety itself tends to help more than managing the environment around it. Professional support is worth genuinely considering here."
    },
    "VL_H": {
      title: "The Guarded Traditionalist",
      summary: "Strongly prefers the familiar, with real emotional sensitivity reinforcing that preference.",
      detail: "Very Low Openness keeps you firmly anchored to known, tested ways of living. High Neuroticism means uncertainty triggers genuine discomfort, which strengthens your pull toward routine. The combination can feel protective, even as it narrows your options.",
      watch_out: "What feels protective can quietly become limiting. Small, low-stakes exposure to change, with support, tends to help more than avoidance does long-term."
    },
    "VL_MH": {
      title: "The Cautious Traditionalist",
      summary: "Comfortable with routine, with a real but manageable undercurrent of worry.",
      detail: "Very Low Openness keeps your world fixed and familiar. Medium-High Neuroticism means moderate emotional sensitivity to uncertainty, enough to reinforce your preference for the known. You manage it, but it's a real factor in your choices.",
      watch_out: "Notice when caution is protecting you versus when it's just avoiding discomfort that wouldn't actually harm you."
    },
    "VL_ML": {
      title: "The Settled Skeptic",
      summary: "Strongly prefers the familiar, with emotions that stay fairly steady most of the time.",
      detail: "Very Low Openness keeps you anchored in known, tested routines. Medium-Low Neuroticism means stress doesn't usually disrupt you much. Your preference for the familiar comes more from comfort and habit than from anxiety.",
      watch_out: "Habit and comfort aren't bad on their own, but periodically question whether they're still serving your actual goals."
    },
    "VL_L": {
      title: "The Calm Traditionalist",
      summary: "Set in your ways, and emotionally steady enough that little disturbs your routine.",
      detail: "Very Low Openness keeps your world predictable by clear preference. Low Neuroticism means stress and uncertainty rarely affect you much, even when they do show up. You're stable, if narrow, in how you move through life.",
      watch_out: "Your steadiness gives you more capacity for change than you currently use. The resistance to new things is preference, not necessity."
    },
    "VL_VL": {
      title: "The Immovable Realist",
      summary: "Maximum preference for the familiar, paired with exceptional emotional steadiness.",
      detail: "Very Low Openness shuts down interest in new or unfamiliar territory almost entirely. Very Low Neuroticism means almost nothing emotionally destabilizes you, even significant pressure or change. This is the most stable, least adaptable profile in this combination.",
      watch_out: "Your stability is real and valuable, but it can also mean you never test yourself against anything new, simply because nothing forces you to. Growth here has to be a deliberate choice, not a response to discomfort."
    }
  }
};

export default COMBINATION_INSIGHTS_ON;
