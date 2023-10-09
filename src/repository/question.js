import { modelQuestion } from "../models/question.js";

const createQuestionRepo = async (data) => {
  try {
    const question = new modelQuestion(data);
    return question.save();
  } catch (error) {
    console.log("repo : failed to create question");
    throw error;
  }
};

const getQuestionRepo = async () => {
  try {
    const dataQuestion = await modelQuestion.find({}).select("-real_answer");
    console.log(dataQuestion, 12345);
    return dataQuestion;
  } catch (error) {
    console.log("repo : failed to get all data question");
    throw error;
  }
};

const getQuestionByIdRepo = async (id) => {
  try {
    const dataQuestion = await modelQuestion.findById(id).select("-real_answer");
    return dataQuestion;
  } catch (error) {
    console.log("repo : failed to get question by id");
    throw error;
  }
};

export { createQuestionRepo, getQuestionRepo, getQuestionByIdRepo };
