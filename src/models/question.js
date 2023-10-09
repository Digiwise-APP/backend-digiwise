import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    level: {
      type: Number,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    option_answer: {
      type: Object,
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
    url_image: {
      type: String,
      require: false,
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
