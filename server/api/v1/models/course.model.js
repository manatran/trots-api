import mongoose from 'mongoose';

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
            ref: 'User'
        }
    ]
})


let Course = module.exports = mongoose.model('Course', courseSchema)