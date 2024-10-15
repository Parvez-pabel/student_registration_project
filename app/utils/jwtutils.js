import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config/config.js";

export const TokenEncode = (student_id)=>{
  return jwt.sign({student_id},JWT_KEY, {expiresIn:"1h"});

};
export const verifyToken = (token)=>{
  return jwt.verify(token, JWT_KEY);
}