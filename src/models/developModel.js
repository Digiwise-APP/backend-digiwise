import mongoose from "mongoose";

const developUserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String },
    password: { type: String },
    img_profile: { type: String },
    level: { type: Number, default: 1 },
  },
  {
    versionKey: false,
  }
);

const developQuestionSchema = new mongoose.Schema(
  {
    question_type: { type: String, enum: ["PG", "truefalse", "checkbox", "mix"], required: true },
    level: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
    question: { type: String, required: true },
    option_answer: { type: String },
    real_answer: { type: String, required: true },
    url_image: { type: String },
  },
  {
    versionKey: false,
  }
);

const developUserAnswerLevelSchema = new mongoose.Schema(
  {
    user_id: { type: String, ref: "UserDevelop" },
    level: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
    question_type: { type: String },
    question_id: { type: Array, ref: "QuestionDevelop" },
    user_answer: { type: mongoose.Schema.Types.Mixed },
    passed: { type: Boolean },
    score: { type: Number },
  },
  {
    versionKey: false,
  }
);

const developLevelSchema = new mongoose.Schema(
  {
    level: { type: Number, required: true, enum: [0, 1, 2, 3, 4, 5] },
    medal: { type: String },
    description: { type: String },
  },
  {
    versionKey: false,
  }
);

const Userdevelop = mongoose.model("UserDevelop", developUserSchema);
const LevelDevelop = mongoose.model("LevelDevelop", developLevelSchema);
const Questiondevelop = mongoose.model("QuestionDevelop", developQuestionSchema);
const UserAnswerLeveldevelop = mongoose.model("UserAnswerLevelDevelop", developUserAnswerLevelSchema);

export { Userdevelop, Questiondevelop, UserAnswerLeveldevelop, LevelDevelop };
