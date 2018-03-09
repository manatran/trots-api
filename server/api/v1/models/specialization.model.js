import mongoose from 'mongoose';

// Specialization Schema
const specializationSchema = mongoose.Schema({
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
  option: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Option',
  },
});


const Specialization = module.exports = mongoose.model('Specialization', specializationSchema);
