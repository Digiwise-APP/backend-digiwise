import Level from "../models/level.js";

async function createLevel(levelData) {
  try {
    const newLevel = new Level(levelData);
    const savedLevel = await newLevel.save();
    return savedLevel;
  } catch (error) {
    throw new Error("Gagal membuat level baru.");
  }
}

async function getAllLevels() {
  try {
    const levels = await Level.find();
    return levels;
  } catch (error) {
    throw new Error("Gagal mengambil data level.");
  }
}

async function getLevelById(levelId) {
  try {
    const level = await Level.findById(levelId);
    return level;
  } catch (error) {
    throw new Error("Gagal mengambil data level berdasarkan ID.");
  }
}

export { createLevel, getAllLevels,  getLevelById};
