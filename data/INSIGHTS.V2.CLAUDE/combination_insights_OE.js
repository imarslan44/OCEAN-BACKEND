const COMBINATION_INSIGHTS_OE = {
  "O+E": {
    "VH_VH": {
      title: "The Magnetic Explorer",
      summary: "Both ideas and people pull at you constantly, and you rarely choose between them.",
      detail: "Very High Openness means your mind never stops generating new directions to explore. Very High Extraversion means you process and amplify those ideas best in the company of others. You're drawn to environments — debates, gatherings, brainstorms — where intellectual and social energy combine, and quiet, isolated routine drains you fast.",
      watch_out: "Constant stimulation-seeking can mean you rarely sit with one idea or one person long enough to go deep. The depth you're capable of requires deliberately slowing down, which won't come naturally."
    },
    "VH_H": {
      title: "The Animated Thinker",
      summary: "Sharp curiosity paired with strong social drive — most of your best ideas surface in conversation.",
      detail: "Very High Openness keeps your mind generating new angles and connections constantly. High Extraversion means you're energized by sharing them, testing them out loud with others rather than refining them alone first. You gravitate toward people who can keep up intellectually.",
      watch_out: "Talking through ideas before fully forming them means some get abandoned the moment the conversation moves on. Not every promising thought needs an audience immediately."
    },
    "VH_MH": {
      title: "The Selective Enthusiast",
      summary: "Ideas excite you constantly; people only do when the conversation matches that energy.",
      detail: "Very High Openness gives you a restless, exploratory mind. Medium-High Extraversion means you enjoy people, but not indiscriminately — you seek out specific conversations rather than constant company. Your social energy is real but conditional on intellectual payoff.",
      watch_out: "Filtering people by how interesting they are in conversation can mean missing out on relationships that deepen slowly rather than impress immediately."
    },
    "VH_ML": {
      title: "The Inward Idea Generator",
      summary: "Your mind races with possibilities, but processing them socially isn't your default.",
      detail: "Very High Openness keeps you constantly generating new ideas and connections. Medium-Low Extraversion means you lean toward working them out internally before — if ever — bringing them to a group. You're capable in social settings but don't need them to think clearly.",
      watch_out: "Ideas that stay entirely internal rarely get the pressure-testing that conversation provides. Occasionally forcing yourself to externalize your thinking will catch blind spots you can't see alone."
    },
    "VH_L": {
      title: "The Solitary Visionary",
      summary: "An exceptionally active mind that does its best work away from people.",
      detail: "Very High Openness gives you constant access to new ideas and unusual connections. Low Extraversion means social settings cost you energy rather than generate it, so you naturally retreat to think things through alone. Your richest output happens in solitude, not in rooms full of people.",
      watch_out: "Brilliant thinking that never leaves your head doesn't move anything forward. You'll need a deliberate, low-energy way to share your ideas — writing rather than rooms, for instance."
    },
    "VH_VL": {
      title: "The Hermit Philosopher",
      summary: "An extraordinarily active inner world, almost entirely disconnected from social life.",
      detail: "Very High Openness fills your mind with constant exploration and questioning. Very Low Extraversion means people and social settings aren't just unnecessary for you — they're actively draining. You live almost entirely in your own thinking, remarkably rich but remarkably isolated.",
      watch_out: "At this extreme, your ideas risk never being tested against anyone else's perspective. Total isolation, even intellectually fertile isolation, eventually narrows rather than expands your thinking."
    },
    "H_VH": {
      title: "The Social Catalyst",
      summary: "Strong curiosity, but it's your social drive that defines how you move through the world.",
      detail: "High Openness gives you real interest in new ideas and people. Very High Extraversion means you're constantly seeking out interaction — leading conversations, organizing gatherings, pulling energy from rooms full of people. Ideas matter to you, but mostly as fuel for connection.",
      watch_out: "Your need for constant interaction can outpace your patience for thinking something through quietly first. Slow down before committing to ideas that arrived mid-conversation, full of social momentum."
    },
    "H_H": {
      title: "The Idea Hunter",
      summary: "Mental excitement and social energy are requirements for you, and you search for both simultaneously.",
      detail: "High Openness keeps you looking for new and interesting ideas. High Extraversion means you find those ideas by engaging with people. Conversations are where your best thinking happens. You feel most alive in places that are both intellectually stimulating and energetic.",
      watch_out: "Choosing to know a little about many things rather than a lot about one thing is common for you. Mastering a skill or building a truly deep relationship requires quiet, unsocial focus, which goes against your natural momentum."
    },
    "H_MH": {
      title: "The Engaged Thinker",
      summary: "Being around people is enjoyable, especially when curiosity and conversation reinforce each other.",
      detail: "High Openness brings a steady hunger for new ideas. Medium-High Extraversion means you enjoy a fair amount of social engagement, more than someone reserved but less than someone who needs constant company. You seek out people who think well.",
      watch_out: "Your standards for a good conversation are high, which can mean dismissing people too quickly before a real connection has a chance to form."
    },
    "H_ML": {
      title: "The Thoughtful Socializer",
      summary: "Being around people is enjoyable, provided the conversation is genuinely interesting.",
      detail: "High Openness brings a deep hunger for ideas, while Medium-Low Extraversion means you manage your social energy carefully. You rarely try to attend every event. When you meet someone who thinks in fascinating ways, connection happens quickly. Casual small talk, however, rarely provides the energy you are looking for.",
      watch_out: "Your standards for a good conversation are high, which means you might walk away from people too quickly. Some relationships become highly meaningful only after surviving the superficial small talk at the beginning."
    },
    "H_L": {
      title: "The Solitary Explorer",
      summary: "Your richest experiences happen inside your own head, and you are at peace with that.",
      detail: "High Openness gives you a mind that constantly explores possibilities, while Low Extraversion means you process these ideas alone. Reading, thinking, and writing are not performed for an audience; they are simply how your mind works. Your inner world is not a hiding place — it is your preferred habitat.",
      watch_out: "Great ideas that stay hidden in your mind do not change the world. Your clear thinking is only helpful if it eventually reaches others."
    },
    "H_VL": {
      title: "The Quiet Mind",
      summary: "Curious and thoughtful, but social settings hold almost no pull for you.",
      detail: "High Openness keeps you intellectually engaged and exploring ideas regularly. Very Low Extraversion means people and groups feel like a cost rather than a benefit, so you avoid them by default. Nearly all of your best thinking happens in complete solitude.",
      watch_out: "At this level of withdrawal, even the rare valuable conversation may get avoided out of habit. Make space for the few social interactions that would genuinely sharpen your thinking."
    },
    "MH_VH": {
      title: "The Warm Connector",
      summary: "Open to new ideas without chasing them, but unmistakably driven by people and energy.",
      detail: "Medium-High Openness means you're receptive to new perspectives without constantly seeking novelty. Very High Extraversion means social interaction is close to a need for you — you're energized by groups, conversation, and constant engagement. People remember you as someone genuinely present in the room.",
      watch_out: "Your strong pull toward social energy can crowd out the quieter reflection that turns good ideas into great ones. Build in deliberate alone time, even though it won't feel natural."
    },
    "MH_H": {
      title: "The Engaged Mind",
      summary: "Genuinely curious and genuinely social, without either trait dominating the other.",
      detail: "Medium-High Openness gives you real interest in new ideas, expressed comfortably in social settings. High Extraversion means you actively seek out people and conversation. The two traits reinforce each other well — you think out loud, and people enjoy thinking with you.",
      watch_out: "Comfort in groups can mean you rarely test your ideas in solitude, where some of the best refinement happens. Protect occasional quiet time, even when company is easy to find."
    },
    "MH_MH": {
      title: "The Balanced Engager",
      summary: "A comfortable, moderate mix of curiosity and sociability that adapts easily to most settings.",
      detail: "Medium-High Openness and Medium-High Extraversion combine into someone who's neither the most novelty-seeking nor the most socially driven person around, but functions well in both intellectual and social settings. You move easily between solitary thinking and group engagement.",
      watch_out: "Without strong pulls in either direction, it's easy to drift toward whatever the environment expects rather than what you actually want. Check in periodically on whether your balance is a choice."
    },
    "MH_ML": {
      title: "The Measured Thinker",
      summary: "Curious in a quiet way, with social energy that's present but not a driving need.",
      detail: "Medium-High Openness keeps you reasonably interested in new ideas and perspectives. Medium-Low Extraversion means you're comfortable with people but don't actively seek out constant interaction. You're capable in groups without needing them to feel fulfilled.",
      watch_out: "Your moderate energy in both directions can make you easy to overlook in louder environments. Make sure your good ideas are actually getting heard, not just quietly held."
    },
    "MH_L": {
      title: "The Reserved Thinker",
      summary: "Reasonably curious, but solitude is clearly where you do your best thinking.",
      detail: "Medium-High Openness gives you steady interest in new ideas without it being an obsession. Low Extraversion means social settings cost you energy, so you default to processing things alone. You're thoughtful rather than expressive, and that suits you fine.",
      watch_out: "Ideas that never get tested in conversation can quietly drift from insight into assumption. Find at least one trusted person to think out loud with occasionally."
    },
    "MH_VL": {
      title: "The Private Observer",
      summary: "Reasonably open-minded, but almost entirely withdrawn from social engagement.",
      detail: "Medium-High Openness means you take in new ideas and perspectives readily. Very Low Extraversion means you do this almost entirely alone — groups and social settings feel unnecessary or draining. You observe more than you participate.",
      watch_out: "Strong observation without participation means your insights rarely get tested or shared. At some point, sharing matters as much as noticing."
    },
    "ML_VH": {
      title: "The Engaged Traditional",
      summary: "People and social events energize you, while exploring abstract ideas holds less appeal.",
      detail: "Very High Extraversion provides strong social energy. You actively seek out people, feel great in group settings, and are often the center of the action. Medium-Low Openness means spending time on deeply unusual ideas is rare. You connect with people through shared memories, common jokes, and familiar topics.",
      watch_out: "While your social skills are strong, a lack of interest in learning new things might make it harder to add unique value to deep conversations."
    },
    "ML_H": {
      title: "The Familiar Connector",
      summary: "Sociable and warm, with curiosity that stays close to familiar ground.",
      detail: "Medium-Low Openness means you're generally content with known ideas and proven ways of thinking. High Extraversion means people and social engagement come easily and energize you regularly. You build relationships through consistency and presence rather than novelty.",
      watch_out: "Your social ease can mask a narrower range of topics you're genuinely curious about. Occasionally pushing into less familiar territory would round out the depth people experience with you."
    },
    "ML_MH": {
      title: "The Comfortable Mixer",
      summary: "Practical-minded but reasonably social, content in familiar group settings.",
      detail: "Medium-Low Openness keeps your interests fairly grounded and consistent. Medium-High Extraversion means you enjoy a healthy amount of social interaction without needing it constantly. You're an easy, low-maintenance presence in most groups.",
      watch_out: "Comfort with the familiar — both in ideas and people — can mean fewer genuinely new connections or perspectives over time."
    },
    "ML_ML": {
      title: "The Versatile Middle",
      summary: "Handling social events and quiet time without feeling stressed in either direction comes naturally.",
      detail: "Neither extreme controls your life. You are not desperate for crowds, nor do you hide from them. You are neither obsessed with new ideas nor stuck in old habits. Working well with a team or functioning perfectly alone are both easy for you.",
      watch_out: "Being highly adaptable can sometimes mean mirroring the people around you too closely. Ensure your flexibility is helping you reach your own goals, not just making others feel comfortable."
    },
    "ML_L": {
      title: "The Quiet Drifter",
      summary: "Big ideas and large crowds hold little appeal, allowing you to build a quiet life.",
      detail: "A deep need to learn everything or meet everyone does not drive you. Functioning well in most situations without strong emotional attachment is your standard mode. You are reliable, steady, and unbothered by the chaotic ambitions of others.",
      watch_out: "Not caring deeply feels comfortable, but eventually, you might realize you have not grown or changed in years."
    },
    "ML_VL": {
      title: "The Withdrawn Pragmatist",
      summary: "Limited pull toward new ideas, and almost no draw toward social engagement.",
      detail: "Medium-Low Openness keeps your world fairly familiar and unsurprising. Very Low Extraversion means social settings feel unnecessary at best, draining at worst. You live a fairly self-contained life, low on both novelty and interaction.",
      watch_out: "This combination can drift toward isolation without you fully noticing it happening. Stay aware of whether your quiet life is chosen or simply the default you've stopped questioning."
    },
    "L_VH": {
      title: "The Social Traditionalist",
      summary: "Thriving in social settings is easy for you, as long as the people and topics feel familiar.",
      detail: "Low Openness means feeling safest when social events follow predictable rules. Very High Extraversion means you actively look for these events and truly enjoy them, often becoming the most energetic person in the room.",
      watch_out: "Social energy is only one element of a good relationship. Without sharing deeper or newer ideas, friendships might stay largely on the surface."
    },
    "L_H": {
      title: "The Familiar Crowd-Pleaser",
      summary: "Comfortable and energetic in groups, as long as nothing too unconventional comes up.",
      detail: "Low Openness means you prefer familiar topics and predictable situations. High Extraversion means you genuinely enjoy people and seek out company often. You're a steady, dependable social presence, well-liked for your consistency rather than for introducing new ideas.",
      watch_out: "If someone introduces an unusual or strange topic, your interest fades fast — and that gap can limit how deep your friendships actually get."
    },
    "L_MH": {
      title: "The Sociable Realist",
      summary: "Practical and people-oriented, content with moderate social engagement.",
      detail: "Low Openness keeps you grounded in familiar, tested ways of thinking. Medium-High Extraversion means you enjoy a fair amount of company without needing constant stimulation. You're easy to be around because you don't demand much novelty from your social interactions.",
      watch_out: "Your comfort with the familiar applies to people too — you may default to the same circle rather than expanding it."
    },
    "L_ML": {
      title: "The Reserved Conventional",
      summary: "Thinking practically, enjoying a moderate social life, and avoiding rushed decisions define your style.",
      detail: "Seeking out wild new ideas or large crowds is rare for you. A normal social life satisfies you without requiring any drama, and challenging the standard rules seems unnecessary. You are stable and predictable in the best possible way.",
      watch_out: "There is a version of this life that is deeply fulfilling, and another version that is secretly quite dull. Honesty with yourself is required to know which one you are actually living."
    },
    "L_L": {
      title: "The Quiet Conventional",
      summary: "Comfortable with the familiar and content with limited social engagement.",
      detail: "Low Openness keeps your world predictable and unsurprising. Low Extraversion means you don't actively seek out company, though you're not opposed to it either. Life moves at a calm, low-stimulation pace that suits you most days.",
      watch_out: "This pace can be genuinely peaceful or genuinely stagnant — the difference depends entirely on whether you're choosing it deliberately."
    },
    "L_VL": {
      title: "The Solitary Minimalist",
      summary: "Wild ideas and large crowds are unnecessary for your happiness — a trait less common than it sounds.",
      detail: "Low Openness keeps you from constantly searching for new thrills. Very Low Extraversion ensures that being alone never feels like a punishment; it is your favorite choice. You possess true independence.",
      watch_out: "Complete independence can turn into building an unnecessary wall around yourself. Occasionally ask yourself if you are living a small life by choice, or merely out of habit."
    },
    "VL_VH": {
      title: "The Tribal Extrovert",
      summary: "Deep comfort with the familiar, expressed through near-constant social engagement.",
      detail: "Very Low Openness means you stick firmly to known ideas, people, and routines. Very High Extraversion means you express that comfort loudly and often, through frequent gatherings with the same trusted circle. Familiarity and energy combine into a strong, tight-knit social world.",
      watch_out: "Your social world may be wide in frequency but narrow in range — the same people, the same topics, repeated often. New perspectives rarely break through."
    },
    "VL_H": {
      title: "The Loyal Regular",
      summary: "Sociable and consistent, sticking close to familiar people and familiar ground.",
      detail: "Very Low Openness keeps your interests and routines firmly fixed. High Extraversion means you're genuinely energized by regular social contact, almost always within the same trusted group. You're the reliable presence at every gathering, rarely missing and rarely changing.",
      watch_out: "Strong loyalty to the familiar can shade into resistance toward anyone or anything new entering the group."
    },
    "VL_MH": {
      title: "The Settled Socializer",
      summary: "Comfortable with routine, and reasonably content with regular, familiar company.",
      detail: "Very Low Openness means change rarely appeals to you. Medium-High Extraversion means you enjoy a decent amount of social contact, mostly within established circles. Life stays steady, predictable, and socially warm within a fairly fixed range.",
      watch_out: "This steadiness works well until circumstances force change. Build at least a little tolerance for unfamiliar people or situations before it's forced on you."
    },
    "VL_ML": {
      title: "The Quiet Traditionalist",
      summary: "Resistant to new ideas, with social energy that's present but unremarkable.",
      detail: "Very Low Openness keeps you firmly anchored to the familiar. Medium-Low Extraversion means social contact happens, but isn't a strong driver for you. You live a fairly narrow, stable life, low on both novelty and active social pursuit.",
      watch_out: "This narrow stability can become limiting without you noticing, since nothing forces you to confront it."
    },
    "VL_L": {
      title: "The Withdrawn Traditionalist",
      summary: "Strong preference for the familiar, with little drive toward social engagement.",
      detail: "Very Low Openness means new ideas or experiences hold little appeal. Low Extraversion means you don't seek out people either. The result is a life lived mostly within a small, unchanging circle — comfortable, but increasingly narrow over time.",
      watch_out: "This combination has almost no natural pull toward growth or new connection. Without deliberate effort, your world will likely keep shrinking rather than staying the same size."
    },
    "VL_VL": {
      title: "The Quiet Recluse",
      summary: "Strong resistance to new ideas combined with almost no pull toward social contact.",
      detail: "Very Low Openness shuts down interest in unfamiliar ideas before they're considered. Very Low Extraversion means people and social settings hold essentially no appeal. You live an extremely self-contained, insulated life, by far the most withdrawn profile in this combination.",
      watch_out: "At this extreme, isolation isn't just comfortable — it can become genuinely unhealthy without you noticing the line being crossed."
    }
  }
};

export default COMBINATION_INSIGHTS_OE;
