import { addLevel, fetchAllLevels, fetchLevelById } from "../services/level.js";
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

    let newLevel = await addLevel(req.body);
    generateResponse(res, 201, "success create level", newLevel);
  } catch (error) {
    responseError(res, error);
  }
};

const getAllLevelsController = async (req, res) => {
  try {
    const levels = await fetchAllLevels();
    generateResponse(res, 200, "success get all levels", levels);
  } catch (error) {
    responseError(res, error);
  }
};

const getDetailLevelController = async (req, res) => {
  try {
    const levelId = req.params.id;
    const level = await fetchLevelById(levelId);

    if (!level) {
      return res.status(404).json({ error: "Data level tidak ditemukan." });
    }

    generateResponse(res, 200, "success get detail level", level);
  } catch (error) {
    responseError(res, error);
  }
};

export { createLevelController, getAllLevelsController, getDetailLevelController };
