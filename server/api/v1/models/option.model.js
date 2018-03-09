import mongoose from 'mongoose';

// Option Schema
const optionSchema = mongoose.Schema({
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
});


const Option = module.exports = mongoose.model('Option', optionSchema);
