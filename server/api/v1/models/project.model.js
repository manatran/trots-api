import mongoose from 'mongoose';

// Project Schema
const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignment: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['intern', 'extern', 'buitenland'],
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  creators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  media: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Media',
  }],
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag',
  }],
  tools: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tool',
  }],
});


const Project = module.exports = mongoose.model('Project', projectSchema);
