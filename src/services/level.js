import { createLevelRepo, getAllLevelsRepo, getLevelByIdRepo, getLevelWithParamRepo } from "../repository/level.js";
import { responseError } from "../pkg/responder.js";

const createLevelService = async (levelData) => {
  try {
    const savedLevel = await createLevelRepo(levelData);
    return savedLevel;
  } catch (error) {
    console.log("service : failed to create level");
    throw error;
  }
};

const getAllLevelService = async () => {
  try {
    const levels = await getAllLevelsRepo();
    return levels;
  } catch (error) {
    console.log("service : failed to get all data level");
    throw error;
  }
};

const getLevelByIdService = async (levelId) => {
  try {
    const level = await getLevelByIdRepo(levelId);
    return level;
  } catch (error) {
    console.log("service : failed to get data level by id");
    throw error;
  }
};

const getLevelWithParamService = async (level) => {
  try {
    const checkLevel = await getLevelWithParamRepo(level);
    if (!checkLevel) {
      console.log("service : level not found");
      throw new responseError("level not found", 404);
    }
    return checkLevel;
  } catch (error) {
    console.log("service : failed to get data with param");
    throw error;
  }
};

export { createLevelService, getAllLevelService, getLevelByIdService, getLevelWithParamService };
