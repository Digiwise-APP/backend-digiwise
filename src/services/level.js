import { createLevel, getAllLevels, getLevelById } from "../repository/level.js";

// Fungsi untuk membuat level baru
async function addLevel(levelData) {
  try {
    const savedLevel = await createLevel(levelData);
    return savedLevel;
  } catch (error) {
    throw new Error("Gagal membuat level baru.");
  }
}

async function fetchAllLevels() {
  try {
    const levels = await getAllLevels();
    return levels;
  } catch (error) {
    throw new Error("Gagal mengambil data level.");
  }
}

async function fetchLevelById(levelId) {
  try {
    const level = await getLevelById(levelId);
    return level;
  } catch (error) {
    throw new Error("Gagal mengambil data level berdasarkan ID.");
  }
}

export { addLevel, fetchAllLevels, fetchLevelById };
