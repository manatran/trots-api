const mongoose = require('mongoose')

//import related schemas
let Lecturer = require('./lecturer.model')

//Course Schema
let courseSchema = mongoose.Schema({
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
    semester: {
        type: String,
        required: true
    },
    lecturers: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Lecturer'
        }
    ]
})


let Course = module.exports = mongoose.model('Course', courseSchema)