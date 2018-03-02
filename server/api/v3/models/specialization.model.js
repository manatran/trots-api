const mongoose = require('mongoose')

//Specialization Schema
let specializationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    abbreviation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    option: {
        type: mongoose.Schema.ObjectId,
        ref: 'Option'
    }
})


let Specialization = module.exports = mongoose.model('Specialization', specializationSchema)