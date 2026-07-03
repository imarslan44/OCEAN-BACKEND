const COMBINATION_INSIGHTS_EA = {
  "E+A": {
    "VH_VH": {
      title: "The Magnetic Nurturer",
      summary: "Enormous social energy paired with deep warmth — you pull people in and genuinely take care of them.",
      detail: "Very High Extraversion means you actively seek out people, thrive in groups, and generate social momentum naturally. Very High Agreeableness means that energy is entirely in service of others — you listen, accommodate, and make people feel genuinely seen. Rooms feel warmer after you've been in them, not louder.",
      watch_out: "At this extreme, your social energy and warmth together make it almost impossible for you to say no. You take on other people's emotional weight constantly, often without noticing until you're already depleted. Your wellbeing cannot permanently be the last item on your list."
    },
    "VH_H": {
      title: "The Energetic Connector",
      summary: "High social drive backed by genuine warmth — people gravitate toward you and feel good about it.",
      detail: "Very High Extraversion means you're constantly engaging, organizing, and driving social momentum. High Agreeableness means people don't just enjoy your energy — they trust it. You make connection feel effortless, and your care for others is real enough that the relationships it builds actually last.",
      watch_out: "Your combination of energy and warmth makes you highly attractive to people who need support. Be deliberate about which relationships you invest in deeply, because your instinct is to give freely to everyone."
    },
    "VH_MH": {
      title: "The Social Driver",
      summary: "Strong social energy with real warmth, though you know when to hold your ground.",
      detail: "Very High Extraversion keeps you constantly engaged with people and energized by social environments. Medium-High Agreeableness means you're genuinely warm without being a pushover. You collaborate well, lead naturally, and maintain enough of your own perspective to steer things when needed.",
      watch_out: "Your social momentum can occasionally override good judgment — you commit to things in energetic social moments that you later have to deliver on alone. Pause before the crowd moves you to a decision."
    },
    "VH_ML": {
      title: "The Bold Socializer",
      summary: "High social energy without the instinct to constantly accommodate — you engage on your terms.",
      detail: "Very High Extraversion means you actively seek out people and thrive in groups. Medium-Low Agreeableness means you don't bend easily to what others want from you socially. You're engaging, direct, and comfortable holding your position even in group settings where social pressure is high.",
      watch_out: "Your social confidence can shade into dominance without you noticing. Not everyone in a room is as comfortable asserting themselves as you are — make deliberate space for people who won't take it on their own."
    },
    "VH_L": {
      title: "The Dominant Extrovert",
      summary: "Extreme social energy combined with very little instinct to accommodate others in that space.",
      detail: "Very High Extraversion means you need and seek constant social engagement. Low Agreeableness means you don't soften that energy for others' comfort — you're direct, self-assured, and uncompromising in group settings. You lead rooms by force of presence rather than consensus.",
      watch_out: "People follow you partly because they don't feel they have a choice. Leadership built on social dominance rather than genuine buy-in is fragile — it works until someone pushes back, and then it tends to collapse suddenly."
    },
    "VH_VL": {
      title: "The Social Force",
      summary: "Maximum social energy paired with almost no instinct to accommodate or soften for others.",
      detail: "Very High Extraversion makes constant social engagement close to a need for you. Very Low Agreeableness means you meet that need entirely on your own terms — you engage, assert, and drive without adjusting for others' comfort. You're a commanding, often overwhelming social presence.",
      watch_out: "At this extreme, your social world likely revolves around you in ways that work for now but create fragility long-term. People tolerate dominant social energy — they rarely choose it freely. Build in genuine reciprocity before you need it."
    },
    "H_VH": {
      title: "The Warm Socializer",
      summary: "Genuinely social and genuinely caring — your relationships are real, not just frequent.",
      detail: "High Extraversion means you actively enjoy people and seek out connection. Very High Agreeableness means the connections you form are built on real care and accommodation, not just energy. People don't just enjoy being around you — they trust you. That trust is built on something concrete.",
      watch_out: "Your warmth and social availability make you an easy person to lean on. Without clear limits, you may find yourself carrying more emotional weight than you should, simply because you're both able and willing."
    },
    "H_H": {
      title: "The Genuine Connector",
      summary: "Social energy and real warmth — you build relationships that actually mean something.",
      detail: "High Extraversion keeps you engaged with people and energized by group settings. High Agreeableness means those interactions are marked by genuine care and mutual respect. You're good at creating spaces where people feel comfortable being honest, which is rarer than it looks.",
      watch_out: "Your warmth means you're often the one managing group dynamics — absorbing tension, keeping the peace, bridging conflicts. That's a real cost that rarely gets acknowledged. Make sure it's not coming entirely at your expense."
    },
    "H_MH": {
      title: "The Engaged Partner",
      summary: "Actively social with real warmth — collaborative and genuinely easy to work with.",
      detail: "High Extraversion means you enjoy people and show up with real energy. Medium-High Agreeableness means you're cooperative without being spineless — you care about getting along but haven't lost your own perspective in the process. Most people experience you as both enjoyable and reliable.",
      watch_out: "Your combination is healthy, but in group settings your social energy can pull the conversation in directions that don't always serve the task. Stay aware of when engagement is helping versus when it's just movement."
    },
    "H_ML": {
      title: "The Confident Socializer",
      summary: "High social energy with moderate warmth — engaging and direct, comfortable holding your ground.",
      detail: "High Extraversion means you're energized by people and genuinely enjoy group dynamics. Medium-Low Agreeableness means you stay in contact with your own position even when the room wants you to move. You collaborate when it's useful and push back when it isn't.",
      watch_out: "Your social confidence can occasionally mask when you're being less warm than the situation calls for. Check in on whether the people you work with feel as good about the relationship as you do."
    },
    "H_L": {
      title: "The Assertive Extrovert",
      summary: "Strong social energy expressed on your own terms — engaging but rarely accommodating.",
      detail: "High Extraversion means people and group settings genuinely energize you. Low Agreeableness means you don't adjust much for others' comfort in those settings — you say what you think, hold your ground, and move the room toward your perspective rather than finding the middle.",
      watch_out: "Your assertiveness in social settings is real and often effective. It also means some people feel steamrolled by you without saying so. Build in the habit of actively checking for dissent before assuming agreement."
    },
    "H_VL": {
      title: "The Blunt Extrovert",
      summary: "Highly social, with very little instinct to soften how you engage.",
      detail: "High Extraversion means you actively seek out and enjoy people. Very Low Agreeableness means you engage very directly — without softening, filtering, or adjusting for what others want to hear. You're present, energetic, and unfiltered in a way some people find refreshing and others find exhausting.",
      watch_out: "At this level, the gap between your social drive and your accommodation level creates friction that compounds over time. You want people around and push them away simultaneously. That pattern is worth examining directly."
    },
    "MH_VH": {
      title: "The Steady Nurturer",
      summary: "Real warmth driving most of your social engagement — you show up for people consistently.",
      detail: "Very High Agreeableness means your care for others is deep, constant, and defines most of your social behavior. Medium-High Extraversion means you seek out and enjoy social connection regularly, partly because being with people gives your care somewhere to go. You're the person others describe as always being there.",
      watch_out: "Always being there is a role that can quietly hollow you out if no one is equally there for you. Audit your relationships for genuine reciprocity — not as a transaction, but as a minimum standard."
    },
    "MH_H": {
      title: "The Reliable Presence",
      summary: "Reasonably social and genuinely warm — dependable in both showing up and caring.",
      detail: "Medium-High Extraversion means you engage with people consistently without needing constant stimulation. High Agreeableness means your engagement is backed by real care. You're not the loudest person in the room, but people feel your presence and trust it.",
      watch_out: "Your reliability can make you the default choice for emotional support in groups, which is fine until it becomes assumed. Make sure people know it's a choice, not just a trait."
    },
    "MH_MH": {
      title: "The Balanced Teammate",
      summary: "Reasonably social and reasonably warm — functional, consistent, and easy to work with.",
      detail: "Medium-High Extraversion and Medium-High Agreeableness combine into someone who's pleasant, present, and cooperative without either trait pulling to an extreme. You contribute socially, care about people, and don't create friction. Most groups benefit from having you in them.",
      watch_out: "Without strong pulls in either direction, you can drift toward whatever role the group assigns you rather than the one you'd actually choose. Make deliberate decisions about how you want to show up."
    },
    "MH_ML": {
      title: "The Practical Engager",
      summary: "Reasonably social, with warmth that's real but selective.",
      detail: "Medium-High Extraversion means you enjoy people in moderate, manageable doses. Medium-Low Agreeableness means your warmth is earned rather than automatic — you give genuine attention to people you're invested in, and less to everyone else. You're engaging without being indiscriminate.",
      watch_out: "Your selectivity is defensible, but it can read as coldness to people who haven't yet earned your warmth. A bit more visible openness early in relationships would help people reach the point where they experience the real version of you."
    },
    "MH_L": {
      title: "The Direct Engager",
      summary: "Moderately social and fairly direct — no pretense, no excess accommodation.",
      detail: "Medium-High Extraversion means you engage comfortably in social settings. Low Agreeableness means you do so on your own terms — directly, without softening much for comfort. You say what you mean, engage when you want to, and don't perform warmth you don't feel.",
      watch_out: "Your authenticity is real, but some social situations require a minimum of warmth as entry cost before real communication can happen. Not performing warmth isn't the same as not needing to provide it."
    },
    "MH_VL": {
      title: "The Blunt Engager",
      summary: "Moderately social with very little accommodation — present but direct to the point of friction.",
      detail: "Medium-High Extraversion means you seek out social engagement regularly. Very Low Agreeableness means your presence in those settings is unfiltered and direct, with almost no instinct to adjust for others' comfort. You engage — just entirely on your own terms.",
      watch_out: "At this level, your social presence is likely creating more friction than you're aware of. People may stop inviting the real conversation because your delivery makes it costly."
    },
    "ML_VH": {
      title: "The Quiet Caretaker",
      summary: "Deep warmth expressed through consistent, quiet presence rather than social energy.",
      detail: "Very High Agreeableness means your care for others is genuine, constant, and defining. Medium-Low Extraversion means you don't express that care through social performance or energy — it comes through in small, reliable, personal ways. People who know you well understand they can count on you without you making a show of it.",
      watch_out: "Your quiet care is easy to take for granted precisely because it doesn't announce itself. Make sure the people you're consistently showing up for actually recognize and reciprocate that investment."
    },
    "ML_H": {
      title: "The Reserved Helper",
      summary: "Genuine warmth without the need for constant social engagement to express it.",
      detail: "High Agreeableness means you care about others and show it through real, consistent action. Medium-Low Extraversion means you don't need a lot of social activity to feel connected — your relationships are fewer but deeper. You're the person someone calls when something actually matters.",
      watch_out: "Your reserve can mean people don't realize how much you care until they need you. That's fine for the people who stay long enough to find out, but it may limit the range of relationships you build."
    },
    "ML_MH": {
      title: "The Thoughtful Companion",
      summary: "Moderate social engagement paired with genuine, if measured, warmth.",
      detail: "Medium-Low Extraversion means your social engagement is selective and deliberate. Medium-High Agreeableness means the connections you do make are built on real care. You're not building the widest social circle, but the one you have tends to be solid.",
      watch_out: "Your social investment is genuine but limited in reach. Make sure the selectivity is serving you and not just defaulting to staying comfortable with known people."
    },
    "ML_ML": {
      title: "The Independent Moderate",
      summary: "Moderate social engagement, moderate warmth — functional across most social settings without strong investment.",
      detail: "Medium-Low Extraversion and Medium-Low Agreeableness combine into someone who participates in social settings without being driven by them. You're capable of warmth and capable of directness, without either defining you. You adapt to what the situation needs, within limits.",
      watch_out: "Moderate in both directions can mean you don't fully show up for either the social or the caring dimension of a relationship. People may sense the limit without being able to name it."
    },
    "ML_L": {
      title: "The Private Realist",
      summary: "Limited social drive and limited warmth — self-contained and clear about it.",
      detail: "Medium-Low Extraversion means you manage your social engagement carefully. Low Agreeableness means you don't compensate for limited social energy with extra warmth — you're direct and real, without performing comfort you don't feel. People know where they stand with you.",
      watch_out: "Clarity about your limits is useful, but at this level it can narrow your social world more than you intend. Some of the relationships worth having require more initial investment than you're currently offering."
    },
    "ML_VL": {
      title: "The Self-Contained Loner",
      summary: "Limited social engagement and very little accommodation of others — genuinely self-sufficient.",
      detail: "Medium-Low Extraversion means you don't seek out much social contact. Very Low Agreeableness means what little social contact you do have is on entirely your own terms. You function well independently, without much need for either company or cooperation.",
      watch_out: "Self-sufficiency is valuable until it becomes isolation. Occasionally check whether your independence is a genuine choice or just the path of least social resistance."
    },
    "L_VH": {
      title: "The Devoted Introvert",
      summary: "Deep warmth for a small circle, expressed with minimal social energy.",
      detail: "Very High Agreeableness means your care for others is genuine and deep. Low Extraversion means that care is expressed in quiet, personal, one-on-one ways rather than through broad social engagement. You're not building a network — you're tending a few relationships with real depth.",
      watch_out: "Your investment in a small circle is real and valuable. Make sure it's not also fragile — relationships built with very few people carry higher risk if any of those connections shift."
    },
    "L_H": {
      title: "The Quiet Supporter",
      summary: "Warm and caring, expressed through presence and reliability rather than social energy.",
      detail: "High Agreeableness means your care for people is genuine and consistent. Low Extraversion means you express it through depth rather than breadth — you're not the person making the room feel alive, but you're the person someone trusts with something real. That's a different and equally important role.",
      watch_out: "Quiet support is valuable and real. It also tends to be invisible in environments that reward visible social energy. Make sure your contributions are seen, not just felt."
    },
    "L_MH": {
      title: "The Reserved Teammate",
      summary: "Introverted but genuinely cooperative — you work well with others without needing to lead the social charge.",
      detail: "Low Extraversion means you don't seek out social engagement frequently. Medium-High Agreeableness means when you do engage, you're cooperative and genuinely considerate. You're not the social engine of a group, but you're a reliable, low-friction member of one.",
      watch_out: "Your reserve can mean you go unrecognized in larger groups where visible social participation signals value. Find low-energy ways to make your contributions visible."
    },
    "L_ML": {
      title: "The Reserved Individual",
      summary: "Low social drive with moderate, selective warmth — present but not particularly invested.",
      detail: "Low Extraversion means you keep social engagement to a minimum. Medium-Low Agreeableness means your warmth, when it appears, is earned and real rather than performed. You're independent, quiet, and genuinely fine with limited social contact.",
      watch_out: "At this level, your social world is narrow by both preference and behavior. Check periodically whether that's still what you actually want."
    },
    "L_L": {
      title: "The Solitary Individualist",
      summary: "Low social drive and low warmth — highly independent, engaging on strictly your own terms.",
      detail: "Low Extraversion means you prefer limited social contact. Low Agreeableness means what contact exists is direct and unaccommodating. You're self-sufficient, clear-eyed, and unbothered by the social expectations that exhaust more extroverted or agreeable people.",
      watch_out: "This profile works until you need something from other people — a job, a referral, a collaborator, genuine support. Build at least minimal social capital before you need it."
    },
    "L_VL": {
      title: "The True Loner",
      summary: "Very low social drive combined with very low accommodation — genuinely prefers minimal contact.",
      detail: "Low Extraversion means social engagement is draining and rarely sought. Very Low Agreeableness means when it does happen, you make almost no adjustment for others' comfort. Your world is small, self-contained, and operated entirely on your own terms.",
      watch_out: "This combination makes almost every form of collaborative goal genuinely difficult. If any of your objectives involve other people, the social cost of this profile needs to be addressed directly."
    },
    "VL_VH": {
      title: "The Devoted Recluse",
      summary: "Extraordinary warmth for the very few — almost no energy for social engagement beyond a tiny circle.",
      detail: "Very High Agreeableness means your care for others is intense and genuine. Very Low Extraversion means that care is expressed to almost no one — your circle is extremely small and your social energy nearly absent. The few people inside that circle experience remarkable depth of care.",
      watch_out: "A combination of extreme warmth and extreme introversion means your care is rationed to almost no one. Check whether that's a deliberate choice or an accidentally narrow life."
    },
    "VL_H": {
      title: "The Warm Hermit",
      summary: "Genuine care for others, almost entirely disconnected from social engagement.",
      detail: "High Agreeableness means your warmth and care are real. Very Low Extraversion means you express them to very few people, very rarely, in ways that don't require sustained social energy. The care is there — the social reach for it is almost entirely absent.",
      watch_out: "Your warmth without social presence means most people never experience it. That's a real loss — for them and for you."
    },
    "VL_MH": {
      title: "The Quiet Cooperator",
      summary: "Reasonably warm but deeply private — cooperative in the rare moments of engagement.",
      detail: "Very Low Extraversion means social contact is minimal. Medium-High Agreeableness means when it does happen, you're cooperative and genuinely considerate. You don't seek out interaction, but you handle it well when it finds you.",
      watch_out: "Your rarity as a social presence means most people don't know you well enough to trust you, even if you'd be trustworthy. Occasional, deliberate engagement would build more than your current default allows."
    },
    "VL_ML": {
      title: "The Deep Introvert",
      summary: "Very low social drive and moderate self-containment — almost entirely independent.",
      detail: "Very Low Extraversion means social contact is rare by strong preference. Medium-Low Agreeableness means the little contact that does occur is on your terms, without much adjustment for others. You function almost entirely independently, which suits you fine.",
      watch_out: "At this level of social withdrawal, opportunities and relationships that would genuinely matter are likely passing you by without you noticing — because you're simply not in the spaces where they happen."
    },
    "VL_L": {
      title: "The Isolated Individualist",
      summary: "Almost no social engagement and very low warmth — the most self-contained profile in this combination.",
      detail: "Very Low Extraversion means social engagement is actively avoided. Low Agreeableness means the little that occurs is direct, unaccommodating, and brief. You live almost entirely within your own world, which is stable but narrow.",
      watch_out: "This combination doesn't just limit relationships — it limits most outcomes that require other people's cooperation or trust. If that's not the life you want, this is the profile that requires the most deliberate change."
    },
    "VL_VL": {
      title: "The Self-Contained Island",
      summary: "Near-zero social drive paired with near-zero accommodation — maximum independence, minimum connection.",
      detail: "Very Low Extraversion and Very Low Agreeableness combine into the most withdrawn and unaccommodating profile in this pairing. You seek almost no social contact, and what little exists is entirely on your own terms, without adjustment for others. You function as a fully self-contained unit.",
      watch_out: "At this extreme, it's worth asking honestly whether this is a chosen way of living or the result of never having built the social muscle to do otherwise. Both are possible — only one is actually satisfying long-term."
    }
  }
};

export default COMBINATION_INSIGHTS_EA;
