import { developCreateLevelService } from "../services/developLevelService.js";
import { generateResponse, responseError } from "../pkg/responder.js";

export const developCreateLevelController = async (req, res) => {
  try {
    let { level, medal, description } = req.body;
    if (level == 0) {
      throw new responseError("level is required", 400);
    }
    if (medal == "") {
      throw new responseError("medal is required", 400);
    }
    if (description == "") {
      throw new responseError("question is required", 400);
    }

    const newLevel = await developCreateLevelService(req.body);
    generateResponse(res, 201, "Success create level", newLevel);
  } catch (error) {
    responseError(res, error);
  }
};
