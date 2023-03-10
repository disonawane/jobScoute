import express from "express";
const router = express.Router();

import { rateLimit } from "express-rate-limit";

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message:
    "To many requests from this IP address ,Please try again after 15 minutes",
});

import { register, login, updateUser,getCurrentUser ,logout} from "../controllers/authController.js";

import authenticateUser from "../middleware/auth.js";
import testUser123 from "../middleware/testUser123.js";

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/logout").get( logout);
router.route("/updateUser").patch(authenticateUser, testUser123, updateUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);

export default router;
