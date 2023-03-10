import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
 const token = req.cookies.token
 if(!token){
  throw new UnAuthenticatedError('Authentication Invalid')
 }

  

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser123=payload.userId ==='640625a0ac1331452ad7b6f5'
    req.user = { userId: payload.userId,testUser123 };

    

    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

export default auth;
