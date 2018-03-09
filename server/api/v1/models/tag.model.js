import mongoose from 'mongoose';

// Tag Schema
const tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});


const Tag = module.exports = mongoose.model('Tag', tagSchema);
