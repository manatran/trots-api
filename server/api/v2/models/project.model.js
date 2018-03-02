const mongoose = require('mongoose')

//import related schemas
let Course = require('./course.model')
let Lecturer = require('./lecturer.model')
let Student = require('./student.model')
let Media = require('./media.model')
let Tag = require('./tag.model')
let Tool = require('./tool.model')

//Project Schema
let projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    assignment: {
        type: String,
        required: true
    },
    thumbnail_url: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    type: {
				type: String,
				enum: ['intern', 'extern', 'buitenland'],
				required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    creators: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Student'
        }
    ],
    media: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Media'
        }
    ],
    tags: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Tag'
        }
    ],
    tools: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Tool'
        }
    ]
})


let Project = module.exports = mongoose.model('Project', projectSchema)
