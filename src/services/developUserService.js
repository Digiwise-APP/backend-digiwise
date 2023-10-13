import { developCreateUserRepo, developGetUserByEmailRepo } from "../repository/developUserRepo.js";
import { CustomError } from "../pkg/customError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const developCreateUserService = async (username, email, password, img_profile) => {
  try {
    const existsEmail = await developGetUserByEmailRepo({ email });
    if (existsEmail) {
      console.log("service : email already exists");
      throw new CustomError("email is already available, please login", 400);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userData = { username, email, password: hashPassword, img_profile };
    return await developCreateUserRepo(userData);
  } catch (error) {
    console.log("service : failed to create");
    throw error;
  }
};

export const developLoginUserService = async (email, password) => {
  try {
    const user = await developGetUserByEmailRepo({ email });
    if (!user) {
      console.log("service : user not found");
      throw new CustomError("user not found", 404);
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log("service : password is not compare");
      throw new CustomError("Wrong Email or Password ", 400);
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    return { token, user };
  } catch (error) {
    console.log("service : please register first");
    throw error;
  }
};
