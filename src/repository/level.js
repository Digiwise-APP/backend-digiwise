import { Level } from "../models/level.js";

const createLevel = async (levelData) => {
  try {
    const savedLevel = await Level.save(levelData);
    return savedLevel;
  } catch (error) {
    console.log("repo : failed to create level");
    throw error;
  }
};

const getAllLevels = async () => {
  try {
    const levels = await Level.find();
    return levels;
  } catch (error) {
    console.log("repo : failed to get all data ");
    throw error;
  }
};

const getLevelById = async (levelId) => {
  try {
    const level = await Level.findById(levelId);
    return level;
  } catch (error) {
    console.log("repo : failed to get data level by id ");
    throw error;
  }
};

export { createLevel, getAllLevels, getLevelById };
