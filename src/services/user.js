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
    throw new error();
  }
};

const getUserByEmailService = async (id) => {
  try {
    const dataEmail = await getUserByEmailRepo(id);

    if (!dataEmail) {
      console.log("service : email not found");
      throw new responseError("email not found", 404);
    }

    return dataEmail;
  } catch (error) {
    console.log("service : failed to get user by id");
    throw new error();
  }
};

export { createUserService, getUserByEmailService };
