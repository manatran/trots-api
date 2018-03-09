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
    type: String,
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
    type: mongoose.Schema.ObjectId,
    ref: 'Specialization',
  },
  tags: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Tag',
  }],
  social_media: [{
    type: mongoose.Schema.ObjectId,
    ref: 'SocialMedia',
  }],
});

const User = module.exports = mongoose.model('User', userSchema);
