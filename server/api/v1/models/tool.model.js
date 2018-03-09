import mongoose from 'mongoose';

// Tool Schema
const toolSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
});


const Tool = module.exports = mongoose.model('Tool', toolSchema);
