import mongoose from 'mongoose';

// City Schema
const citySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  postal_code: {
    type: String,
    required: true,
  },
});


const City = module.exports = mongoose.model('City', citySchema);
