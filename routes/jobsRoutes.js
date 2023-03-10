import express from "express";

const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";
import testUser123 from "../middleware/testUser123.js";

router.route("/").post(testUser123,createJob).get(getAllJobs);

router.route("/stats").get(showStats);
router.route("/:id").delete(testUser123,deleteJob).patch(testUser123,updateJob);

export default router;
