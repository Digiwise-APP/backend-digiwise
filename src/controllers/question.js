import { createQuestionService, getQuestionService, getQuestionByIdService } from "../services/question.js";
import { generateResponse, responseError } from "../pkg/responder.js";

const createQuestionController = async (req, res) => {
  try {
    let { level, question, option_answer, real_answer, question_type } = req.body;
    if (level == 0) {
      throw new responseError("level is required", 400);
    }
    if (question == "") {
      throw new responseError("question is required", 400);
    }
    if (option_answer == null) {
      throw new responseError("option answer is required", 400);
    }
    if (real_answer == "") {
      throw new responseError("real answer is required", 400);
    }
    if (question_type == "") {
      throw new responseError("question type is required", 400);
    }

    let newQuestion = await createQuestionService(req.body);

    generateResponse(res, 201, "success create question", newQuestion);
  } catch (error) {
    responseError(res, error);
  }
};

const getQuestionController = async (req, res) => {
  try {
    let dataQuestion = await getQuestionService();
    generateResponse(res, 200, "success get all data question", dataQuestion);
  } catch (error) {
    responseError(res, error);
  }
};

const getQuestionByIdController = async (req, res) => {
  try {
    const questionId = req.params.id;
    const question = await getQuestionByIdService(questionId);

    if (!question) {
      throw new responseError("question not found", 400);
    }

    generateResponse(res, 200, "success get data question by id", question);
  } catch (error) {
    responseError(res, error);
  }
};

export { createQuestionController, getQuestionController, getQuestionByIdController };
