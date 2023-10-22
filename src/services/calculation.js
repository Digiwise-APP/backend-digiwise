// import { CustomError } from "../pkg/customError.js";
import { developGetQuestionByIdRepo } from "../repository/developQuestionRepo.js";
import { developUpdateLevelUserRepo } from "../repository/developUserRepo.js";
export const compareAnswer = async (answerUser, userId) => {
  let usersScore = 0;
  for (let i = 0; i < answerUser.length; i++) {
    try {
      const item = answerUser[i];
      if (item && item.question_id) {
        const questionId = item.question_id;
        const userAnswer = item.user_answer;

        const idQuestion = await developGetQuestionByIdRepo(questionId);
        const dataRealAnswer = idQuestion.real_answer;

        // ----------------- Multi Answers ----------------
        if (Array.isArray(userAnswer)) {
          // Jika userAnswer adalah array, lakukan looping

          // split kunci jawaban dari database
          const formattedResult = dataRealAnswer.split(" | ");
          let isAnswerCorrect = true;

          for (let j = 0; j < userAnswer.length; j++) {
            if (formattedResult[j] !== userAnswer[j]) {
              isAnswerCorrect = false;
              break;
            }
          }

          if (isAnswerCorrect) {
            usersScore += 20;
            console.log(usersScore, 1818);
          } else {
            console.log(usersScore, 2020);
          }
          //  ------------------ Satu Answer --------------
        } else if (dataRealAnswer === userAnswer) {
          usersScore += 20;
          console.log(usersScore, 1919);
        } else {
          console.log(usersScore, 2112);
        }
      }
    } catch (error) {
      throw error;
    }
  }
  passedCheck(usersScore, userId);
  return usersScore;
};

export const passedCheck = (scoreResult, user_id) => {
  let passedLevel = false;
  if (scoreResult >= 80) {
    developUpdateLevelUserRepo(user_id);
    passedLevel = true;
  }

  return passedCheck;
};
