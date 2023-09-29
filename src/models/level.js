import mongoose from "mongoose";

const { Schema } = mongoose;

const levelSchema = new Schema(
  {
    level: {
      type: Number,
      required: true,
    },
    id_user: {
      type: String,
      required: true,
    },
    passed: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Level = mongoose.model("Level", levelSchema);

export default Level;
