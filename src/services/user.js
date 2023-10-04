import { responseError } from "../pkg/responder.js";
import { createUserRepo, getUserByEmailRepo } from "../repository/user.js";

const createUserService = async (_id, username, email, img_profile) => {
  try {
    const existsEmail = await getUserByEmailRepo({ email });
    if (existsEmail) {
      console.log("service : email already exists");
      throw new responseError("email already exists", 400);
    }

    const userData = { _id, username, email, img_profile };
    const saveUser = await createUserRepo(userData);
    return saveUser;
  } catch (error) {
    console.log("service : failed to create user");
    throw error;
  }
};

export { createUserService };
