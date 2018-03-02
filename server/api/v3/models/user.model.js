const mongoose = require('mongoose')

//User Schema
let userSchema = mongoose.Schema({
		type: {
			type: String,
			enum: ['student', 'lecturer', 'alumnus'],
			required: true
		},
		name: {
			type: String
		},
		first_name: {
			type: String
		},
		email: {
			type: String
		},
		username: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		student_number: {
			type: String
		},
		picture: {
			type: String
		},
		hometown: {
			type: mongoose.Schema.ObjectId,
			ref: 'City'
		},
		bio: {
			type: String
		},
		quote: {
			type: String
		},
		prefferred_regions: [
			{
				type: mongoose.Schema.ObjectId,
				ref: 'City'
			}
		],
		specialization: {
			type: mongoose.Schema.ObjectId,
			ref: 'Specialization'
		},
		tags: [
			{
				type: mongoose.Schema.ObjectId,
				ref: 'Tag'
			}
		],
		social_media: [
			{
				type: mongoose.Schema.ObjectId,
				ref: 'SocialMedia'
			}
		]
})

let User = module.exports = mongoose.model('User', userSchema)