import { modelUser } from "../models/user.js";

const createUserRepo = async (userData) => {
  try {
    const savedUser = await modelUser.create(userData);
    return savedUser;
  } catch (error) {
    console.log("repo : failed to create user");
    throw error;
  }
};

const getUserByEmailRepo = async (email) => {
  try {
    const dataUser = await modelUser.findOne(email);
    return dataUser;
  } catch (error) {
    console.log("repo : failed to get user by Id");
    throw error;
  }
};

export { createUserRepo, getUserByEmailRepo };
