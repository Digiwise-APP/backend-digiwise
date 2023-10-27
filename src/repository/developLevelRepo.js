import { LevelDevelop } from "../models/developModel.js";

export const developCreateLevelRepo = async (data) => {
  try {
    const level = new LevelDevelop(data);
    return level.save();
  } catch (error) {
    console.log("repo : failed to create level description");
    throw error;
  }
};

export const developGetMedalUserLevelRepo = async (level) => {
  try {
    const data = LevelDevelop.find({ level: level });
    return data;
  } catch (error) {
    console.log("repo : failed to get medal level by level");
    throw error;
  }
};
