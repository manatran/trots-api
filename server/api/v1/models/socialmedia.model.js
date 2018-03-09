import mongoose from 'mongoose';

// SocialMedia Schema
const socialmediaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  icon_url: {
    type: String,
    required: true,
  },
});


const SocialMedia = module.exports = mongoose.model('SocialMedia', socialmediaSchema);
