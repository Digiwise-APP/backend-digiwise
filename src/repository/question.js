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
    const dataQuestion = await modelQuestion.find();
    return dataQuestion;
  } catch (error) {
    console.log("repo : failed to get all data question");
    throw error;
  }
};

const getQuestionByIdRepo = async (id) => {
  try {
    const dataQuestion = await modelQuestion.findById(id);
    return dataQuestion;
  } catch (error) {
    console.log("repo : failed to get question by id");
    throw error;
  }
};

export { createQuestionRepo, getQuestionRepo, getQuestionByIdRepo };
