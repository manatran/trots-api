const mongoose = require('mongoose')

//import related schemas
let Option = require('./option.model')

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