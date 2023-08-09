import usersModel from "../models/users.model.js";
import { encrypt, compare } from "../utils/pass.manager.util.js";

const registerUserService = async (user) => {
  try {
    const password = await encrypt(user.password);
    const userRegister = await usersModel.create({ ...user, password });
    userRegister.set("password", undefined, { strict: false });
    return userRegister;
  } catch (error) {
    console.log("error", error);
  }
};

const showAllUsersService = async (_) => {
  try {
    const users = await usersModel.find();

    return users;
  } catch (error) {
    console.log("error", error);
  }
};

export { registerUserService, showAllUsersService };
