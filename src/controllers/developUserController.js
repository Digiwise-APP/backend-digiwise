import { developCreateUserService, developLoginUserService } from "../services/developUserService.js";
import { generateResponse, responseError } from "../pkg/responder.js";
import { CustomError } from "../pkg/customError.js";

export const developCreateUserController = async (req, res) => {
  try {
    let { username, email, password, img_profile } = req.body;
    if (username == "") {
      throw new CustomError("username is required", 400);
    }
    if (email == "") {
      throw new CustomError("email is required", 400);
    }

    if (password == "") {
      throw new CustomError("password is required", 400);
    }

    const user = await developCreateUserService(username, email, password, img_profile);
    generateResponse(res, 201, "succes register", user);
  } catch (error) {
    responseError(res, error);
  }
};

export const developLoginUserController = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (email == "") {
      throw new CustomError("email is required", 400);
    }
    if (password == "") {
      throw new CustomError("password is required", 400);
    }
    const token = await developLoginUserService(email, password);

    generateResponse(res, 200, "success login", token);
  } catch (error) {
    responseError(res, error);
  }
};
