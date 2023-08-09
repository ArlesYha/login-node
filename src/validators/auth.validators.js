import { check } from "express-validator";
import { validateResults } from "../utils/validator.manager.util.js";

const validatorRegister = [
  check("username").exists().notEmpty().isLength({ min: 3, max: 99 }),

  check("password")
    .exists()
    .notEmpty()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),

  check("rol").exists().notEmpty().isIn(["admin", "user"]),

  (req, res, next) => validateResults(req, res, next),
];

const validatorLogin = [
  check("username").exists().notEmpty().isString(),

  check("password")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 15 }),

  (req, res, next) => validateResults(req, res, next),
];

export { validatorRegister, validatorLogin };
