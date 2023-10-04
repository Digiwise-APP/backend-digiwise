import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    _id: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    img_profile: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.set();
const modelUser = mongoose.model("User", userSchema);
export { modelUser };
