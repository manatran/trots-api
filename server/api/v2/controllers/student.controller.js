
const Student = require('../models/student.model');
const cuid = require('cuid');
const slugify = require('slugify');
const sanitizeHtml = require('sanitize-html');

//related schemas
let City = require('../models/city.model')
let Specialization = require('../models/specialization.model')
let Tag = require('../models/tag.model')
let SocialMedia = require('../models/socialmedia.model')
let Option = require('../models/option.model')

/**
 * Get all students
 * @param req
 * @param res
 * @returns void
 */
function getStudents(req, res){
	Student.find().populate(['hometown','prefferred_regions','specialization', 'tags','social_media']).populate({
			path: 'specialization',
			populate: {
					path: 'option',
					model: 'Option'
			}
	}).exec((err, students) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(students);
	});
}
module.exports.getStudents = getStudents;

/**
 * Get student by id
 * @param req
 * @param res
 * @returns void
 */
function getStudentById(req, res) {
	Student.findOne({ _id: req.params.id }).populate(['hometown','prefferred_regions','specialization','tags','social_media','option']).populate({
		path: 'specialization',
		populate: {
				path: 'option',
				model: 'Option'
		}
	}).exec((err, student) => {
			if (err) {
				res.status(500).send(err);
			}
			res.json(student);
		});
	}
module.exports.getStudentById = getStudentById;