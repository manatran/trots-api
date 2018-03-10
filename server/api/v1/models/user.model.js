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
    type: String, // Have to use String or query by Specialization doesn't work
    ref: 'Specialization',
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag',
  }],
  social_media: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SocialMedia',
  }],
});

const User = module.exports = mongoose.model('User', userSchema);
