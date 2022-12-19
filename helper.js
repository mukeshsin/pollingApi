import jwt from "jsonwebtoken";
export const generateToken = async (userId) => {
 let token = await jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.expire,
  });
  return token
};
  