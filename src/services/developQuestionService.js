import developCreateQuestionRepo from "../repository/developQuestionRepo.js";

export const developCreateQuestionService = async (dataQuestion) => {
  try {
    const question = dataQuestion;
    return await developCreateQuestionRepo(question);
  } catch (error) {
    console.log("service : failed to create question");
    throw error;
  }
};
