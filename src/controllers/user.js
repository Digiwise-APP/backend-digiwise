import { generateResponse, responseError } from "../pkg/responder.js";
import { createUserService } from "../services/user.js";

const createUserController = async (req, res) => {
  try {
    let { _id, username, email, img_profile } = req.body;
    if (_id == "") {
      throw new responseError("ID is required", 400);
    }
    if (username == "") {
      throw new responseError("username is required", 400);
    }
    if (email == "") {
      throw new responseError("email is required", 400);
    }
    if (img_profile == "") {
      throw new responseError("image profile type is required", 400);
    }

    let newUser = await createUserService(req.body);

    generateResponse(res, 201, "success create user", newUser);
  } catch (error) {
    responseError(res, error);
  }
};

export { createUserController };
