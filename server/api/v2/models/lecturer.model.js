const mongoose = require('mongoose')

//Lecturer Schema
let lecturerSchema = mongoose.Schema({
    name: {
        type: String
    },
    first_name: {
        type: String
    },
    email: {
        type: String,
        required: true
    }
})

let Lecturer = module.exports = mongoose.model('Lecturer', lecturerSchema)