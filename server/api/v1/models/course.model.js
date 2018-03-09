import mongoose from 'mongoose';

// Course Schema
const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  abbreviation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  lecturers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});


const Course = module.exports = mongoose.model('Course', courseSchema);
