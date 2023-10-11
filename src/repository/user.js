import { modelUser } from "../models/user.js";

const createUserRepo = async (userData) => {
  try {
    const savedUser = new modelUser(userData);
    return savedUser.save();
  } catch (error) {
    console.log("repo : failed to create user");
    throw error;
  }
};

const getUserByEmailRepo = async (id) => {
  try {
    const dataUser = await modelUser.findById(id);
    return dataUser;
  } catch (error) {
    console.log("repo : failed to get user by Id");
    throw error;
  }
};

export { createUserRepo, getUserByEmailRepo };
