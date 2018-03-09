import mongoose from 'mongoose';

//City Schema
let citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    }
})


let City = module.exports = mongoose.model('City', citySchema)