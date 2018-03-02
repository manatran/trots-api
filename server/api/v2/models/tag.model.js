const mongoose = require('mongoose')

//Tag Schema
let tagSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


let Tag = module.exports = mongoose.model('Tag', tagSchema)