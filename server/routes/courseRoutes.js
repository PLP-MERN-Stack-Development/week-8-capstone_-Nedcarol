const express = require("express");
const { body } = require("express-validator");
const {
  createCourse,
  getCourses,
  enroll,
  myCourses,
} = require("../controllers/courseController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// GET all courses
router.get("/", getCourses);

// POST a new course (admin only) with validation
router.post(
  "/",
  authMiddleware,
  isAdmin,
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("price").isFloat({ gt: 0 }).withMessage("Valid price is required"),
  ],
  createCourse
);

// POST enroll in a course (auth only)
router.post("/enroll/:id", authMiddleware, enroll);

// GET my courses (auth only)
router.get("/my", authMiddleware, myCourses);

module.exports = router;
