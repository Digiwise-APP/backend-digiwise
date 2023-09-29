import { createQuestionRepo } from "../repository/question.js";

const createQuestionService = async (dataQuestion) => {
  try {
    const question = dataQuestion;
    return await createQuestionRepo(question);
  } catch (error) {
    console.log("service : failed to create question");
    throw error;
  }
};

export { createQuestionService };
