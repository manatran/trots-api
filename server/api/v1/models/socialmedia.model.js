import mongoose from 'mongoose';

//SocialMedia Schema
let socialmediaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    icon_url: {
        type: String,
        required: true
    }
})


let SocialMedia = module.exports = mongoose.model('SocialMedia', socialmediaSchema)