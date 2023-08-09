import { verifyToken } from "../utils/jwt.manager.util.js";

const validateJWT = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).send({ errors: ["Usuario no autorizado"] });

  const jwt = authorization.split(" ")[1];

  if (!jwt) return res.status(401).send({ errors: ["Usuario no autorizado"] });

  try {
    req.id = verifyToken(jwt);
    next();
  } catch (error) {
    console.log(error);
  }
};

export { validateJWT };
