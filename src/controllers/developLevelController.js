import {
  developCreateLevelService,
  getMedalByLevel,
} from "../services/developLevelService.js";
import { generateResponse, responseError } from "../pkg/responder.js";

export const developCreateLevelController = async (req, res) => {
  try {
    let { level, medal, description } = req.body;
    if (medal == "") {
      throw new responseError("medal is required", 400);
    }

    const newLevel = await developCreateLevelService(req.body);
    generateResponse(res, 201, "Success create level", newLevel);
  } catch (error) {
    responseError(res, error);
  }
};

// Endpoint untuk mendapatkan data medal berdasarkan level pengguna
export const getUserMedalByLevel = async (req, res) => {
  const { level } = req.params;
  const userId = req.user.user_id;
  try {
    const medalData = await getMedalByLevel(level, userId);

    generateResponse(res, 200, "Success get medal", medalData);
  } catch (error) {
    responseError(res, error);
  }
};
