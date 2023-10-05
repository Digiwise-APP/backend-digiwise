import { createLevelService, getAllLevelService, getLevelByIdService, getLevelWithParamService } from "../services/level.js";
import { generateResponse, responseError } from "../pkg/responder.js";

const createLevelController = async (req, res) => {
  try {
    let { level, id_user, passed } = req.body;
    if (level == 0) {
      throw new responseError("level is required", 400);
    }
    if (id_user == "") {
      throw new responseError("id_user is required", 400);
    }
    if (passed === false || typeof passed == "string") {
      throw new responseError("passed is required", 400);
    }

    let newLevel = await createLevelService(req.body);
    generateResponse(res, 201, "success create level", newLevel);
  } catch (error) {
    responseError(res, error);
  }
};

const getAllLevelsController = async (req, res) => {
  try {
    const levels = await getAllLevelService();
    generateResponse(res, 200, "success get all levels", levels);
  } catch (error) {
    responseError(res, error);
  }
};

const getLevelByIdController = async (req, res) => {
  try {
    const levelId = req.params.id;
    const level = await getLevelByIdService(levelId);

    if (!level) {
      return res.status(404).json({ error: "Level by not found" });
    }

    generateResponse(res, 200, "success get level by ID", level);
  } catch (error) {
    responseError(res, error);
  }
};

const getLevelWithParamController = async (req, res) => {
  try {
    const { level } = req.query;
    const dataLevel = await getLevelWithParamService(level);
    generateResponse(res, 200, "success get level with param", dataLevel);
  } catch (error) {
    responseError(res, error);
  }
};

export { createLevelController, getAllLevelsController, getLevelByIdController, getLevelWithParamController };
