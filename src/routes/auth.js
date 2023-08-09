import { Router } from "express";
import { validatorRegister } from "../validators/auth.validators.js";
import {
  registerUserCtrl,
  loginUserCtrl,
  showUsersCtrl,
} from "../controllers/auth.controller.js";
import { validateJWT } from "../validators/auth.jwt.js";

const router = Router();

router.post("/login", loginUserCtrl);
router.post("/register", validatorRegister, registerUserCtrl);
router.get("/show/all", validateJWT, showUsersCtrl);

export default router;
