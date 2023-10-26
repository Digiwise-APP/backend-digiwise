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
