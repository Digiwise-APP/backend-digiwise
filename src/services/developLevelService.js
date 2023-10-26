import { developCreateLevelRepo } from "../repository/developLevelRepo.js";

export const developCreateLevelService = async (dataLevel) => {
  try {
    const level = dataLevel;
    return await developCreateLevelRepo(level);
  } catch (error) {
    console.log("service : failed to create level description", error);
    throw error;
  }
};


