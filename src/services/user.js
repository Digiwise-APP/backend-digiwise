import { createUser } from "../repository/user.js";

const createUserService = async (dataUser) => {
  try {
    const saveUser = await createUser(dataUser);
    return saveUser;
  } catch (error) {
    console.log("service : failed to create user");
    throw error;
  }
};

export { createUserService };
