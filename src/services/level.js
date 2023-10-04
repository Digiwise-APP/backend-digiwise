import { createLevel, getAllLevels, getLevelById } from "../repository/level.js";

const addLevel = async (levelData) => {
  try {
    const savedLevel = await createLevel(levelData);
    return savedLevel;
  } catch (error) {
    console.log("service : failed to create level");
    throw error;
  }
};

const fetchAllLevels = async () => {
  try {
    const levels = await getAllLevels();
    return levels;
  } catch (error) {
    console.log("service : failed to get all data level");
    throw error;
  }
};

const fetchLevelById = async (levelId) => {
  try {
    const level = await getLevelById(levelId);
    return level;
  } catch (error) {
    console.log("service : failed to get data by id");
    throw error;
  }
};

export { addLevel, fetchAllLevels, fetchLevelById };
