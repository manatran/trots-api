import mongoose from 'mongoose';

// User Schema
const userSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ['student', 'lecturer', 'alumnus'],
    required: true,
  },
  name: {
    type: String,
  },
  first_name: {
    type: String,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  student_number: {
    type: String,
  },
  picture: {
		original: String,
		thumb: String,
		sm: String,
		md: String,
		lg: String,
  },
  city: {
    type: String,
  },
  postal_code: {
    type: String,
  },
  bio: {
    type: String,
  },
  quote: {
    type: String,
  },
  preferred_regions: [{
    type: String,
  }],
  specialization: {
    type: String, // Have to use String or query by Specialization doesn't work
    ref: 'Specialization',
  }
});

const User = module.exports = mongoose.model('User', userSchema);
