import { modelUser } from "../models/user.js";

const createUser = async (userData) => {
  try {
    const savedUser = await modelUser.create(userData);
    return savedUser;
  } catch (error) {
    console.log("repo : failed to create user");
    throw error;
  }
};

export { createUser };
