import jwt from "jsonwebtoken";
import "dotenv/config";

export function createToken(userdata) {
  const token = jwt.sign(userdata, process.env.tokenKey);
  return token;
}
