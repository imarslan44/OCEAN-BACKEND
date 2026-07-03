const COMBINATION_INSIGHTS_OC = {
  "O+C": {
    "VH_VH": {
      title: "The Visionary Architect",
      summary: "Imagination at its most extreme, paired with discipline strong enough to build it into reality.",
      detail: "Very High Openness means your mind constantly generates possibilities most people never consider. Very High Conscientiousness means you don't just dream — you build detailed plans and execute them with rare persistence. The combination produces work that is both original and structurally sound, which is genuinely uncommon.",
      watch_out: "Your standards for both ideas and execution are extreme, which makes delegation difficult — few people meet your bar on either front. Watch for projects that grow more elaborate than they need to be simply because you're capable of adding more."
    },
    "VH_H": {
      title: "The Ambitious Builder",
      summary: "A restless, idea-rich mind combined with strong enough discipline to bring most of it to life.",
      detail: "Your imagination runs further than most people's, constantly producing new angles and possibilities. High Conscientiousness gives you the follow-through to act on a good portion of what you generate, though not everything makes the cut. People are often surprised by how much you actually ship given how much you're thinking about.",
      watch_out: "The volume of ideas you generate will always outpace your execution capacity. Choosing which ideas deserve your discipline is a skill worth sharpening — not everything that excites you is worth finishing."
    },
    "VH_MH": {
      title: "The Selective Creator",
      summary: "Ideas come constantly; only the ones that truly grab you receive your full discipline.",
      detail: "Very High Openness fills your head with more possibilities than any one person could pursue. Medium-High Conscientiousness means you do finish things, but only when something earns your sustained interest. Your best work happens when curiosity and commitment line up, which is often but not automatic.",
      watch_out: "Projects that started exciting but lost their spark are likely scattered behind you. Building a system to finish work even after the initial thrill fades will multiply your output significantly."
    },
    "VH_ML": {
      title: "The Idea-Rich Drifter",
      summary: "Your mind produces more than your follow-through can keep up with.",
      detail: "Very High Openness gives you a near-constant stream of new directions, connections, and possibilities. Medium-Low Conscientiousness means turning any one of them into a finished result takes real effort that doesn't come naturally. You're far more likely to start something brilliant than to complete it.",
      watch_out: "The thrill of a new idea is often just a more interesting escape from finishing an old one. Notice the pattern — it's costing you more than it feels like in the moment."
    },
    "VH_L": {
      title: "The Unfinished Visionary",
      summary: "Brilliant ideas arrive constantly; almost none survive long enough to become real.",
      detail: "Your imagination is genuinely exceptional — connections and possibilities others miss come easily to you. Low Conscientiousness means the unglamorous work of finishing rarely happens without outside pressure. Left alone, you accumulate half-built ideas rather than completed ones.",
      watch_out: "Without a collaborator or hard deadline forcing completion, your best ideas will likely stay exactly that — ideas. Find a structure external to your own willpower, because internal motivation alone won't be enough."
    },
    "VH_VL": {
      title: "The Chaotic Genius",
      summary: "Extraordinary imagination paired with almost no ability to organize or finish it.",
      detail: "Very High Openness gives you a mind that never stops generating original, sometimes brilliant ideas. Very Low Conscientiousness means structure, planning, and follow-through feel almost foreign to you. The gap between what you imagine and what actually exists in the world is wide and painful when you're honest about it.",
      watch_out: "This combination burns people out — yourself included — through a cycle of inspiration and abandonment. Without serious external structure, very little of what you imagine will ever exist."
    },
    "H_VH": {
      title: "The Disciplined Innovator",
      summary: "Strong creativity meets even stronger discipline, producing consistently original, well-finished work.",
      detail: "High Openness keeps you generating fresh ideas and approaches. Very High Conscientiousness means almost nothing you start goes unfinished — you plan meticulously and execute with precision. This combination is rare and valuable: most creative people lack your follow-through, and most disciplined people lack your originality.",
      watch_out: "Your need for thoroughness can slow down ideas that would benefit from moving fast and imperfect. Not every project needs your full rigor — save it for the ones that matter most."
    },
    "H_H": {
      title: "The Rare Innovator",
      summary: "Generating ideas worth pursuing is only half your strength; you also put in the work to finish them.",
      detail: "High Openness fills your mind with imagination, while High Conscientiousness provides the structure to organize it. This combination is rare in creative work. You invent something new and then do the hard work to make it real. Teams that follow your lead build things that other groups struggle to conceptualize.",
      watch_out: "The ability to both imagine and finish easily becomes a trap. Agreeing to do too many things happens because you genuinely believe you can finish them all. Learning to say no early is a skill worth actively developing."
    },
    "H_MH": {
      title: "The Capable Creative",
      summary: "Creative instincts are strong, and your discipline is solid enough to back most of them up.",
      detail: "High Openness keeps your thinking fresh and exploratory. Medium-High Conscientiousness means you generally follow through, though your consistency dips when a project gets repetitive or loses novelty. You finish more than you don't, which already puts you ahead of most genuinely creative people.",
      watch_out: "The projects most likely to stall are the ones that became routine after the exciting part ended. Recognize that pattern early and build in a reason to keep going past the initial spark."
    },
    "H_ML": {
      title: "The Inspired Builder",
      summary: "Discipline appears when you actually care. When it does, your work is outstanding.",
      detail: "You are highly creative, but your discipline remains selective. When a project genuinely interests you, structure appears automatically — you plan, work hard, and finish it. When a project bores you, your focus drifts away. The difference in quality between work you love and work you dislike is obvious to anyone paying attention.",
      watch_out: "You have learned how to focus on things you find interesting, but struggling through boring, necessary work remains an issue. Building tolerance for the boring parts is essential."
    },
    "H_L": {
      title: "The Scattered Visionary",
      summary: "The gap between what you imagine and what you actually finish is your biggest challenge.",
      detail: "High Openness gives you a mind that creates ideas faster than most people can follow. Low Conscientiousness means finishing what you start is a struggle. You are most effective when someone else handles the small details, or when strict deadlines force you to focus. Working alone without rules means your best ideas often stay as ideas forever.",
      watch_out: "Starting new things has likely become your way of avoiding finishing old things. The feeling of a fresh project provides a rush of energy, but it is often just an escape from the tedious middle phase of an older project."
    },
    "H_VL": {
      title: "The Restless Dreamer",
      summary: "Creativity flows easily; almost nothing structural exists to capture and finish it.",
      detail: "High Openness keeps you generating ideas worth pursuing on a regular basis. Very Low Conscientiousness means structure and follow-through are essentially absent — projects get abandoned the moment they stop being fun. Your output depends almost entirely on whoever or whatever provides the discipline you don't supply yourself.",
      watch_out: "Without a partner, deadline, or system imposed from outside, very little will get finished no matter how good the idea was. Stop relying on motivation; build a structure that doesn't require it."
    },
    "MH_VH": {
      title: "The Disciplined Refiner",
      summary: "Curiosity exists, but it's your near-total discipline that defines how you work.",
      detail: "Medium-High Openness means you're open to new approaches without chasing novelty for its own sake. Very High Conscientiousness means execution is never the bottleneck — you plan exhaustively and follow through without fail. You're the person teams trust to actually deliver, even on ideas that aren't fully yours.",
      watch_out: "Your discipline is so strong it can outpace your appetite for genuinely new directions, leading you to perfect things that didn't need perfecting. Make sure your thoroughness is aimed at ideas worth the effort."
    },
    "MH_H": {
      title: "The Grounded Improver",
      summary: "Open enough to explore, disciplined enough to consistently follow through.",
      detail: "Medium-High Openness gives you genuine curiosity, though it's more measured than someone constantly chasing new ideas. High Conscientiousness means almost everything you start gets finished, on schedule and at a solid standard. This combination produces dependable, steady improvement rather than dramatic reinvention.",
      watch_out: "Your reliability can make you the default choice for incremental work, even when a bigger leap would serve you better. Occasionally push past your comfort zone instead of just refining what's already there."
    },
    "MH_MH": {
      title: "The Steady Contributor",
      summary: "A workable mix of curiosity and discipline that performs consistently without extremes.",
      detail: "Medium-High Openness and Medium-High Conscientiousness combine into a profile that's neither the most creative nor the most rigid person in the room. You explore new ideas reasonably often and finish what you commit to most of the time. This makes you dependable across a wide range of situations.",
      watch_out: "Without a clear personal direction, this balance can default into simply doing what's expected rather than what you actually want. Make sure your steadiness is serving your own goals, not just everyone else's."
    },
    "MH_ML": {
      title: "The Methodical Improver",
      summary: "Inventing new things is rarely your goal. You prefer making everything you touch significantly better.",
      detail: "Your curiosity is specific; chasing new ideas just to be different holds no appeal. Medium-Low Conscientiousness means your follow-through is solid for things you care about but inconsistent elsewhere. You take broken processes and refine them, though not every refinement gets carried to completion.",
      watch_out: "A preference for familiar routines combined with inconsistent follow-through means good improvement ideas sometimes stall halfway. Pick fewer things to improve and actually finish them."
    },
    "MH_L": {
      title: "The Inconsistent Improver",
      summary: "Good instincts for what needs fixing, but follow-through is the weak link.",
      detail: "Medium-High Openness gives you a decent eye for what could be better in a system or process. Low Conscientiousness means actually implementing that fix often loses momentum partway through. You see the right changes more often than you complete them.",
      watch_out: "Your ideas for improvement are probably better than your track record of finishing them suggests. The bottleneck isn't your thinking — it's the execution, and that's worth being honest about."
    },
    "MH_VL": {
      title: "The Stalled Improver",
      summary: "You notice what should change, but almost nothing gets carried through to the end.",
      detail: "Medium-High Openness means you have a reasonable sense for where things could improve. Very Low Conscientiousness means execution rarely happens without significant outside pressure. The gap between noticing a problem and actually fixing it is wide and frequent in your life.",
      watch_out: "Good observations without action accumulate into frustration over time, both for you and for people relying on you. Pair your insight with someone or something that forces follow-through."
    },
    "ML_VH": {
      title: "The Precise Executor",
      summary: "Limited interest in new ideas, but near-total discipline in finishing whatever is in front of you.",
      detail: "Medium-Low Openness means you generally prefer proven approaches over experimental ones. Very High Conscientiousness means execution is flawless regardless — once something is assigned or decided, it gets done thoroughly and on time. You are the person organizations rely on to deliver without fail.",
      watch_out: "Your discipline applied to the wrong direction is still wasted effort. Make sure the things you're so reliably finishing are actually worth finishing."
    },
    "ML_H": {
      title: "The Dependable Worker",
      summary: "Practical rather than experimental, but reliably strong in getting things done.",
      detail: "Medium-Low Openness keeps you focused on tested, familiar approaches rather than constant reinvention. High Conscientiousness means your output is consistent and trustworthy — people know what they'll get from you. This combination forms the backbone of most well-functioning teams.",
      watch_out: "Comfort with familiar methods can mean missed opportunities when a genuinely different approach would work better. Stay open to the rare moments when the old way truly isn't the best way."
    },
    "ML_MH": {
      title: "The Practical Finisher",
      summary: "Not chasing novelty, but solidly consistent in seeing things through.",
      detail: "Medium-Low Openness means new ideas rarely excite you unless they're clearly useful. Medium-High Conscientiousness means your follow-through is generally good, with occasional dips on less interesting tasks. You get most things done without much drama.",
      watch_out: "Your preference for the practical can shade into dismissing good ideas simply because they're unfamiliar. Give new approaches a fair hearing before defaulting to what you already know."
    },
    "ML_ML": {
      title: "The Adaptable Contributor",
      summary: "Moving between structure and freedom based on what the moment needs makes you highly useful.",
      detail: "You are not strongly pulled to the extremes. Curiosity appears when needed, and discipline shows up when goals are clear. While rarely the most creative or the most strict person in the room, you work exceptionally well in both environments. When a workplace constantly shifts its rules, your flexibility becomes a massive advantage.",
      watch_out: "Being flexible without having your own clear goals carries a risk. There is a tendency to simply become whatever the people around you need. Ensure your adaptability is a choice, not just a habit."
    },
    "ML_L": {
      title: "The Mild Wanderer",
      summary: "Curiosity pushes you to explore, but organization rarely helps you finish.",
      detail: "You possess genuine curiosity, reading widely and thinking about new topics. However, Low Conscientiousness means this curiosity rarely turns into serious, sustained effort. You collect starting points. Actually finishing things requires a type of boring, steady work that does not come naturally to you.",
      watch_out: "Finding something interesting is not the same as making it useful. Your curiosity is a great asset, but turning ideas into real results requires building strict routines that feel uncomfortable at first."
    },
    "ML_VL": {
      title: "The Distracted Dabbler",
      summary: "Mild curiosity combined with very little staying power means almost nothing gets finished.",
      detail: "Medium-Low Openness gives you occasional interest in new things, without it being a constant pull. Very Low Conscientiousness means even that limited curiosity rarely survives contact with actual effort. The pattern is starting small things and abandoning them quickly, more from lack of structure than lack of interest.",
      watch_out: "The issue isn't a lack of ideas — it's the complete absence of a system to carry any of them forward. Even one small habit of finishing things would change your results dramatically."
    },
    "L_VH": {
      title: "The Reliable Executor",
      summary: "Focusing on doing things perfectly appeals to you far more than doing things differently.",
      detail: "Low Openness means looking for wild new ideas is rare. Very High Conscientiousness means applying intense discipline to doing standard tasks perfectly. You are the backbone of a good team. People trust you to do the work correctly without creating drama or breaking the rules. Reliable results follow you.",
      watch_out: "When the workplace changes suddenly, a love for old methods becomes a weakness. Being reliable is only valuable if you are doing the right tasks. Willingness to learn new skills when the old ones stop working is crucial."
    },
    "L_H": {
      title: "The Consistent Operator",
      summary: "Prefers the known path and executes it with real discipline.",
      detail: "Low Openness means experimentation rarely interests you; you trust what's already proven. High Conscientiousness means you apply real effort and consistency to whatever you do take on. The result is dependable, high-quality work within a fairly narrow, familiar range.",
      watch_out: "Your consistency is real, but it's built on doing familiar things well rather than adapting to new demands. When the ground shifts, you'll need to push past your comfort zone faster than feels natural."
    },
    "L_MH": {
      title: "The Steady Traditionalist",
      summary: "Comfortable with the familiar, and solid enough in follow-through to keep things running smoothly.",
      detail: "Low Openness keeps you anchored to tested approaches rather than constant change. Medium-High Conscientiousness means you generally finish what you start, with a reasonable, unspectacular consistency. You're a stabilizing presence wherever structure and predictability matter.",
      watch_out: "Stability is valuable until the environment demands something genuinely new. Notice when 'the way it's always been done' is no longer serving you, and be willing to move even without full comfort."
    },
    "L_ML": {
      title: "The Comfortable Conventional",
      summary: "Preferring familiar ground, steady effort, and a calm pace is your natural state.",
      detail: "You apply a reasonable amount of effort to get things done, avoiding the stress of massive ambition or the need to be highly creative. Working at a pace you can maintain for years appeals to you. You are generally stable, consistent, and happy to leave things exactly as they are.",
      watch_out: "Staying comfortable and growing as a person rarely happen at the same time. Ensure your relaxed pace is what you actually want out of life, rather than just the path of least resistance."
    },
    "L_L": {
      title: "The Still Point",
      summary: "Sudden bursts of creativity or strict discipline rarely disrupt your peace.",
      detail: "Low Openness keeps you from constantly searching for new experiences, while Low Conscientiousness keeps you from obsessing over strict goals. You live in a quiet, stable balance. This is highly sustainable, even if society praises constant hustle. The main question is whether this quiet life is a conscious choice or simply the easiest option.",
      watch_out: "There is a version of this life that brings true happiness, and another version that is simply being stuck. From the inside, both feelings can seem identical for a very long time."
    },
    "L_VL": {
      title: "The Settled Drifter",
      summary: "Little interest in new ideas, and little structure to act on the few that arise.",
      detail: "Low Openness keeps your world fairly fixed and familiar. Very Low Conscientiousness means even routine tasks struggle to get sustained attention. The result is a quiet, low-friction life, but also one where very little forward motion happens unless something external forces it.",
      watch_out: "Comfort without any structure can quietly turn into years passing with little to show for them. A single small, consistent habit would do more for you than any big resolution."
    },
    "VL_VH": {
      title: "The Rigid Executor",
      summary: "Strongly resistant to new ideas, but flawless in disciplined execution of the familiar.",
      detail: "Very Low Openness means change of any kind feels uncomfortable, even threatening. Very High Conscientiousness means whatever falls within your existing framework gets done with total precision and reliability. You excel in stable, well-defined environments where the rules don't change.",
      watch_out: "Environments that demand adaptation will expose this combination's biggest weakness fast. Your discipline is an asset only as long as you're disciplined about the right, current things — not outdated ones."
    },
    "VL_H": {
      title: "The Set Performer",
      summary: "Deeply set in established ways, with solid discipline to match.",
      detail: "Very Low Openness means new approaches rarely get a fair hearing from you — the old way is the right way. High Conscientiousness means you execute that old way thoroughly and reliably. This works extremely well until the world around you changes faster than you're willing to.",
      watch_out: "Your resistance to new ideas isn't really about quality — it's about discomfort with change itself. That discomfort will eventually cost you more than the change would have."
    },
    "VL_MH": {
      title: "The Cautious Traditionalist",
      summary: "Strongly prefers the familiar, with decent enough follow-through to maintain it.",
      detail: "Very Low Openness keeps you firmly anchored to what's known and tested. Medium-High Conscientiousness means you generally keep things running, without major lapses. You're predictable in the most literal sense — what you did last year is close to what you'll do this year.",
      watch_out: "Predictability becomes a liability the moment circumstances genuinely shift. Build in at least small, deliberate exposure to new approaches before change is forced on you."
    },
    "VL_ML": {
      title: "The Fixed Pragmatist",
      summary: "Resistant to new ideas, and only moderately consistent in execution.",
      detail: "Very Low Openness means you actively prefer not to deviate from known methods. Medium-Low Conscientiousness means even within that narrow comfort zone, your follow-through is inconsistent. The combination can look like stubbornness without the reliability that usually justifies it.",
      watch_out: "If you're going to resist change, the least you can offer is consistency in what you do keep doing. Tightening your follow-through would make your stubbornness far more defensible."
    },
    "VL_L": {
      title: "The Resistant Drifter",
      summary: "Both new ideas and sustained effort feel unappealing, leaving little room for growth.",
      detail: "Very Low Openness keeps you locked into familiar, unchanging patterns. Low Conscientiousness means even those familiar patterns aren't maintained with much discipline. The result is a life that resists both change and structure — comfortable in the short term, stagnant over time.",
      watch_out: "This combination has the weakest natural pull toward growth of any profile. Real change here has to be imposed deliberately, because neither curiosity nor discipline will supply it on their own."
    },
    "VL_VL": {
      title: "The Deep Rut",
      summary: "Strong resistance to anything new, paired with almost no discipline to maintain even the old.",
      detail: "Very Low Openness shuts down interest in new ideas before they're even considered. Very Low Conscientiousness means structure and follow-through are essentially absent. Without something external forcing movement, very little changes in this life from one year to the next.",
      watch_out: "This is the profile most at risk of long-term stagnation, not from bad luck but from the simple absence of both curiosity and discipline. Even one small, externally-imposed habit can start to break the pattern."
    }
  }
};

export default COMBINATION_INSIGHTS_OC;
