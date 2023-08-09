import bcrytjs from "bcryptjs";

/**
 *
 * @param {*} passwordPlain
 */
const encrypt = async (passwordPlain) => {
  const hash = await bcrytjs.hash(passwordPlain, 10);
  return hash;
};

/**
 *
 * @param {*} passwordPlain Clave en texto plano
 * @param {*} hashPassword Clave encriptada
 */
const compare = async (passwordPlain, hashPassword) => {
  return await bcrytjs.compare(passwordPlain, hashPassword);
};

export { encrypt, compare };
