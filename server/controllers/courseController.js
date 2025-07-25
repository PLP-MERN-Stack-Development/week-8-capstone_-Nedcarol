const Course = require("../models/Course");
const User = require("../models/User");

// Admin creates a new course
const createCourse = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const course = await Course.create({
      title,
      description,
      price,
      createdBy: req.user.id,
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: "Failed to create course", error });
  }
};

// Public: Get all available courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch courses", error });
  }
};

// Authenticated user enrolls in a course
const enroll = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (!course || !user) {
      return res.status(404).json({ message: "Course or User not found" });
    }

    if (user.courses.includes(course._id)) {
      return res.status(400).json({ message: "Already enrolled" });
    }

    user.courses.push(course._id);
    await user.save();

    res.status(200).json({ message: "Enrolled successfully", courseId: course._id });
  } catch (error) {
    res.status(500).json({ message: "Enrollment failed", error });
  }
};

// Authenticated user gets their own courses
const myCourses = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("courses");
    res.status(200).json(user.courses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user's courses", error });
  }
};

module.exports = {
  createCourse,
  getCourses,
  enroll,
  myCourses,
};
