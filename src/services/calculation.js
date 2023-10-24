import { developGetQuestionByIdRepo } from "../repository/developQuestionRepo.js";
import { developUpdateLevelUserRepo, developCreateAnswerUserRepo } from "../repository/developUserRepo.js";
export const compareAnswer = async (answerUser, user_id, level, question_type) => {
  let score = 0;
  let question_id = [];
  let user_answer = [];
  for (let i = 0; i < answerUser.length; i++) {
    try {
      const item = answerUser[i];
      if (item && item.question_id) {
        let questionId = item.question_id;
        let userAnswer = item.user_answer;

        question_id.push(item.question_id);
        user_answer.push(item.user_answer);
        const idQuestion = await developGetQuestionByIdRepo(questionId);
        const dataRealAnswer = idQuestion.real_answer;

        // ----------------- Multi Answers ----------------
        if (Array.isArray(userAnswer)) {
          // Jika user_answer adalah array, lakukan looping

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
            score += 20;
            console.log(score, 1818);
          } else {
            console.log(score, 2020);
          }
          //  ------------------ Satu Answer --------------
        } else if (dataRealAnswer === userAnswer) {
          score += 20;
          console.log(score, 1919);
        } else {
          console.log(score, 2112);
        }
      }
    } catch (error) {
      throw error;
    }
  }

  const passed = passedCheck(score, user_id);
  const dataUser = { user_id, level, question_type, question_id, user_answer, passed, score };
  const saveAnswerUser = await developCreateAnswerUserRepo(dataUser);

  return { score };
};

export const passedCheck = (scoreResult, user_id) => {
  let passedLevel = false;
  if (scoreResult >= 80) {
    developUpdateLevelUserRepo(user_id);
    passedLevel = true;
  }
  return passedLevel;
};
