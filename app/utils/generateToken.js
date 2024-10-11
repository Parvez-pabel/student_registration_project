import jwt from "jsonwebtoken"
import { JWT_EXPIRE_TIME, JWT_KEY } from "../config/config.js"

export const TokenEncode = (email, student_id)=>{
  // Implement JWT token encoding logic here
  const KEY = JWT_KEY
  const EXPIRE = {expiresIn: JWT_EXPIRE_TIME}
  const PAYLOAD = { email, student_id }
  return jwt.sign(PAYLOAD,KEY,EXPIRE)
}
export const TokenDecode = (token)=>{
  // Implement JWT token decoding logic here

  try {
    return jwt.verify(token, JWT_KEY)
  } catch (error) {
    return null;
    
  }

}


export default TokenEncode;