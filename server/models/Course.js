const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Course price is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Course', courseSchema);
