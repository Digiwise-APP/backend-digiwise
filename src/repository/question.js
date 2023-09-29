import { modelQuestion } from "../models/question.js";

const createQuestionRepo = async (data) => {
  try {
    const saveQuestion = await modelQuestion.create(data);
    return saveQuestion;
  } catch (error) {
    console.log("repo : failed to create question");
    throw error;
  }
};

export { createQuestionRepo };
