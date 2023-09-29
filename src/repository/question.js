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

const getQuestionRepo = async () => {
  try {
    const saveQuestion = await modelQuestion.find();
    return saveQuestion;
  } catch (error) {
    console.log("repo : failed to get question");
    throw error;
  }
};

export { createQuestionRepo, getQuestionRepo };
