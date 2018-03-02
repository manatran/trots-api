const mongoose = require('mongoose')

//Tool Schema
let toolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    }
})


let Tool = module.exports = mongoose.model('Tool', toolSchema)