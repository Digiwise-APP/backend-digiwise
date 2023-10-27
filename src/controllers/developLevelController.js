import { developCreateLevelService } from "../services/developLevelService.js";
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

