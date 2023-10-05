import mongoose from "mongoose";
const { Schema } = mongoose;

const levelSchema = new Schema(
  {
    level: {
      type: Number,
      required: true,
    },
    id_user: {
      type: Schema.Types.ObjectId,
      ref: "User",
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

const Level = mongoose.model("Levels", levelSchema);
export { Level };
