import { Questiondevelop } from "../models/developModel.js";

export const developCreateQuestionRepo = async (data) => {
  try {
    const question = new Questiondevelop(data);
    return question.save();
  } catch (error) {
    console.log("repo : failed to create question");
    throw error;
  }
};

export const developGetQuestionByIdRepo = async (id) => {
  try {
    const questionId = await Questiondevelop.findById(id);

    return questionId;
  } catch (error) {
    console.log("repo : failed to get question by id");
    throw error;
  }
};

// get question by ids

export const developGetAllQuestionsRepo = async () => {
  try {
    const questionId = Questiondevelop.find().select("-real_answer");
    return questionId;
  } catch (error) {
    console.log("repo : failed to get all questions");
    throw error;
  }
};

export const developGetQuestionByLevelRepo = async (level) => {
  try {
    const data = Questiondevelop.find({ level: level }).select("-real_answer");
    return data;
  } catch (error) {
    console.log("repo : failed to get all questions");
    throw error;
  }
};
