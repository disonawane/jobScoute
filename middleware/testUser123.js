import { BadRequestError } from "../errors/index.js";
const testUser123 = (req, res, next) => {
  if (req.user.testUser123) {
    throw new BadRequestError("Test User .Read Only!");
  }
  next();
};
export default testUser123;
