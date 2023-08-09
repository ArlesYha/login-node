import usersModel from "../models/users.model.js";
import {
  registerUserService,
  showAllUsersService,
} from "../services/auth.service.js";
import { compare } from "../utils/pass.manager.util.js";
import { tokenSign } from "../utils/jwt.manager.util.js";

const loginUserCtrl = async (req, res) => {
  const { username, password } = req.body;

  const existingUserByUserName = await usersModel.findOne({ username }).exec();
  if (!existingUserByUserName)
    return res.status(401).send({ errors: ["Credenciales incorrectas"] });

  const checkPassword = await compare(
    password,
    existingUserByUserName.password
  );

  if (!checkPassword)
    return res.status(401).send({ errors: ["Credenciales incorrectas"] });

  const jwt = await tokenSign(existingUserByUserName._id);

  return res.send({ jwt });
};

const registerUserCtrl = async (req, res) => {
  const user = await registerUserService(req.body);

  res.send(user);
};

const showUsersCtrl = async (req, res) => {
  const users = await showAllUsersService();

  res.status(200).json(users);
};

export { registerUserCtrl, loginUserCtrl, showUsersCtrl };
