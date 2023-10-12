import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String },
    img_profile: { type: String },
    level: { type: Number, default: 1 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const questionSchema = new mongoose.Schema(
  {
    question_type: { type: String, enum: ["PG", "truefalse", "checkbox"], required: true },
    level: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
    question: { type: String, required: true },
    option_answer: { type: String },
    real_answer: { type: String, required: true },
    url_image: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const userAnswerSchema = new mongoose.Schema(
  {
    question_id: { type: String, ref: "Question" },
    user_id: { type: String, ref: "User" },
    question_type: { type: String, enum: ["PG", "truefalse", "checkbox"], required: true },
    question: { type: String, required: true },
    option_answer: { type: String },
    level: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
    attempt: { type: Number },
    real_answer: { type: String, required: true },
    user_answer: { type: String },
    is_correct: { type: Boolean },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
const Question = mongoose.model("Question", questionSchema);
const UserAnswer = mongoose.model("UserAnswer", userAnswerSchema);

export { User, Question, UserAnswer };
