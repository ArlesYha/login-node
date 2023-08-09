import { validationResult } from "express-validator";

const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    res.status(403);
    res.send({ erros: err.array() });
  }
};

export { validateResults };
