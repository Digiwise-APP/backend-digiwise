import { createQuestionRepo, getQuestionRepo, getQuestionByIdRepo } from "../repository/question.js";
// import Repo from "../repository";

const createQuestionService = async (dataQuestion) => {
  try {
    const question = dataQuestion;
    return await createQuestionRepo(question);
  } catch (error) {
    console.log("service : failed to create question");
    throw error;
  }
};

const getQuestionService = async () => {
  try {
    return await getQuestionRepo();
  } catch (error) {
    console.log("service : failed to get all data question");
    throw error;
  }
};

const getQuestionByIdService = async (id) => {
  try {
    return await getQuestionByIdRepo(id);
  } catch (error) {
    console.log("service : failed to get question by id");
    throw error;
  }
};

export { createQuestionService, getQuestionService, getQuestionByIdService };
