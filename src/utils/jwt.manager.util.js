import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

/**
 *
 * @param {*} id identidficador del usuario
 */
const tokenSign = async (id) => {
  const jwtConstructor = new SignJWT({ id });

  const encoder = new TextEncoder();
  const jwt = await jwtConstructor
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encoder.encode(JWT_SECRET));

  return jwt;
};

/**
 *
 * @param {*} tokenJWT Token de session
 * @returns identificador del usuario almacenado en JWT
 */
const verifyToken = async (tokenJWT) => {
  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
      tokenJWT,
      encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    return payload.id;
  } catch (e) {
    return null;
  }
};

export { tokenSign, verifyToken };
