import developCreateQuestionService from "../services/developQuestionService.js";

import { generateResponse, responseError } from "../pkg/responder.js";

export const developCreateQuestionController = async (req, res) => {
  try {
    let { level, question, option_answer, real_answer, question_type, url_image } = req.body;
    if (level == 0) {
      throw new responseError("level is required", 400);
    }
    if (question == "") {
      throw new responseError("question is required", 400);
    }
    if (option_answer == {}) {
      throw new responseError("option answer is required", 400);
    }
    if (real_answer == "") {
      throw new responseError("real answer is required", 400);
    }
    if (question_type == "") {
      throw new responseError("question type is required", 400);
    }

    let newQuestion = await developCreateQuestionService(req.body);

    generateResponse(res, 201, "success create question", newQuestion);
  } catch (error) {
    responseError(res, error);
  }
};
