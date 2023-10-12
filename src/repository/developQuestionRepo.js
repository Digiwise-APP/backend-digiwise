import { Question } from "../models/developModel.js";

export const developCreateQuestionRepo = async (data) => {
  try {
    const question = new Question(data);
    return question.save();
  } catch (error) {
    console.log("repo : failed to create question");
    throw error;
  }
};
