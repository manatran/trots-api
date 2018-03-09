import mongoose from 'mongoose';

// Media Schema
const mediaSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['text', 'image', 'video', 'audio'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});


const Media = module.exports = mongoose.model('Media', mediaSchema);
