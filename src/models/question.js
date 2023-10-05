import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    level: {
      type: Schema.Types.ObjectId,
      ref: "Level",
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    option_answer: {
      type: Array,
      required: true,
    },
    real_answer: {
      type: String,
      required: true,
    },
    question_type: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

questionSchema.set();
const modelQuestion = mongoose.model("Question", questionSchema);
export { modelQuestion };
