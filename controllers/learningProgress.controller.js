import LearningProgress from "../models/learningProgress.model.js";

const serializeLevels = (levels) => {
  const entries = levels instanceof Map ? Array.from(levels.entries()) : Object.entries(levels ?? {});

  return Object.fromEntries(
    entries.map(([levelId, levelProgress]) => [
      levelId,
      levelProgress?.toObject?.() ?? levelProgress,
    ])
  );
};

const serializeSkills = (skills) => {
  const entries = skills instanceof Map ? Array.from(skills.entries()) : Object.entries(skills ?? {});

  return Object.fromEntries(
    entries.map(([skillId, skillProgress]) => [
      skillId,
      {
        currentLevelId: skillProgress.currentLevelId,
        unlockedLevelId: skillProgress.unlockedLevelId,
        levels: serializeLevels(skillProgress.levels),
      },
    ])
  );
};

const toPlainProgress = (document) => ({
  currentSkillId: document.currentSkillId,
  currentLevelId: document.currentLevelId,
  completed: document.completed,
  skills: serializeSkills(document.skills),
});

const normalizeLevelProgress = (levelProgress = {}) => ({
  exerciseIndex: Number.isFinite(Number(levelProgress.exerciseIndex))
    ? Math.max(0, Number(levelProgress.exerciseIndex))
    : 0,
  responses: levelProgress.responses ?? {},
  completed: Boolean(levelProgress.completed),
  completedAt: levelProgress.completedAt,
  updatedAt: new Date(),
});

const normalizeProgressPayload = (payload = {}) => {
  const normalized = {
    currentSkillId: payload.currentSkillId !== undefined ? String(payload.currentSkillId) : undefined,
    currentLevelId: payload.currentLevelId !== undefined ? String(payload.currentLevelId) : undefined,
    completed: Boolean(payload.completed),
    skills: {},
  };

  Object.entries(payload.skills ?? {}).forEach(([skillId, skillProgress = {}]) => {
    const normalizedLevels = {};

    Object.entries(skillProgress.levels ?? {}).forEach(([levelId, levelProgress]) => {
      normalizedLevels[String(levelId)] = normalizeLevelProgress(levelProgress);
    });

    normalized.skills[String(skillId)] = {
      currentLevelId: skillProgress.currentLevelId !== undefined
        ? String(skillProgress.currentLevelId)
        : undefined,
      unlockedLevelId: skillProgress.unlockedLevelId !== undefined
        ? String(skillProgress.unlockedLevelId)
        : undefined,
      levels: normalizedLevels,
    };
  });

  return normalized;
};

const findOrCreateProgress = async (userId) => {
  let progress = await LearningProgress.findOne({ userId });

  if (!progress) {
    progress = await LearningProgress.create({
      userId,
      completed: false,
      skills: {},
    });
  }

  return progress;
};

export const getLearningProgress = async (req, res) => {
  try {
    const progress = await findOrCreateProgress(req.user._id);
    return res.status(200).json(toPlainProgress(progress));
  } catch (error) {
    console.error("Error fetching learning progress:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const saveLearningProgress = async (req, res) => {
  try {
    const progressPayload = normalizeProgressPayload(req.body);

    const progress = await LearningProgress.findOneAndUpdate(
      { userId: req.user._id },
      {
        userId: req.user._id,
        ...progressPayload,
      },
      {
        returnDocument: 'after',
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    return res.status(200).json(toPlainProgress(progress));
  } catch (error) {
    console.error("Error saving learning progress:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const saveLearningLevelProgress = async (req, res) => {
  try {
    const { skillId, levelId } = req.params;
    const progress = await findOrCreateProgress(req.user._id);
    const skillKey = String(skillId);
    const levelKey = String(levelId);
    const skills = progress.skills ?? new Map();
    const skillProgress = skills.get(skillKey) ?? { levels: new Map() };
    const levels = skillProgress.levels instanceof Map
      ? skillProgress.levels
      : new Map(Object.entries(skillProgress.levels ?? {}));

    levels.set(levelKey, {
      ...(levels.get(levelKey)?.toObject?.() ?? levels.get(levelKey) ?? {}),
      ...normalizeLevelProgress(req.body),
    });

    skills.set(skillKey, {
      ...skillProgress,
      currentLevelId: levelKey,
      unlockedLevelId: skillProgress.unlockedLevelId ?? levelKey,
      levels,
    });

    progress.currentSkillId = skillKey;
    progress.currentLevelId = levelKey;
    progress.completed = false;
    progress.skills = skills;
    await progress.save();

    return res.status(200).json(toPlainProgress(progress));
  } catch (error) {
    console.error("Error saving learning level progress:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
