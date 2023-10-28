import {
  developCreateLevelRepo,
  developGetMedalUserLevelRepo,
} from "../repository/developLevelRepo.js";
import {
  developGetUserByIdRepo,
  developGetUserByLevelRepo,
} from "../repository/developUserRepo.js";
import { responseError } from "../pkg/responder.js";

export const developCreateLevelService = async (dataLevel) => {
  try {
    const level = dataLevel;
    return await developCreateLevelRepo(level);
  } catch (error) {
    console.log("service : failed to create level description", error);
    throw error;
  }
};

// Fungsi untuk mendapatkan data medal berdasarkan level
export const getMedalByLevel = async (level, userId) => {
  try {
    const userLevelData = await developGetUserByLevelRepo(level);
    console.log(userLevelData, 12345);
    const userData = await developGetUserByIdRepo(userId);
    console.log(userData, 12112);
    const medalData = await developGetMedalUserLevelRepo(level - 1);
    console.log(medalData[0], 1212);
    // console.log(userData.level, 4112);

    if (medalData[0].level == userData.level - 1) {
      return medalData[0].medal;
    }

    if (!userData) {
      console.log("service: user not found");
      throw new responseError("service: user not found", 404);
    }

    // if (userData.level) {
    //   const medalLevel = medalData[0].level;
    //   console.log(medalLevel, 2211);
    // } else {
    //   throw new responseError(
    //     "Kamu belum bisa akses medal ini, karna level kamu belum mencukupi",
    //     400
    //   );
    // }
  } catch (error) {
    console.log("service : failed to get medal", error);
    throw error;
  }
};
