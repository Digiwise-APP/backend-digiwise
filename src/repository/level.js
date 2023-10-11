import { Level } from "../models/level.js";

const createLevelRepo = async (levelData) => {
  try {
    const savedLevel = await Level.create(levelData);
    return savedLevel;
  } catch (error) {
    console.log("repo : failed to create level");
    throw error;
  }
};

const getAllLevelsRepo = async () => {
  try {
    const levels = await Level.find();
    return levels;
  } catch (error) {
    console.log("repo : failed to get all data ");
    throw error;
  }
};

const getLevelByIdRepo = async (levelId) => {
  try {
    const level = await Level.findById(levelId);
    return level;
  } catch (error) {
    console.log("repo : failed to get data level by id ");
    throw error;
  }
};

const getLevelWithParamRepo = async (level) => {
  console.log(level, 12345);
  try {
    const data = await Level.find({ level: level });
    console.log(data, 9876);
    return data;
  } catch (error) {
    console.log("repo : failed to get data level with param");
    throw error;
  }
};

export { createLevelRepo, getAllLevelsRepo, getLevelByIdRepo, getLevelWithParamRepo };
