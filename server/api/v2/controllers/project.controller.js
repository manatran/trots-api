const Project = require('../models/project.model');
const cuid = require('cuid');
const slugify = require('slugify');
const sanitizeHtml = require('sanitize-html');

//related schemas
let Course = require('../models/course.model')
let Lecturer = require('../models/lecturer.model')
let Student = require('../models/student.model')
let Media = require('../models/media.model')
let Tag = require('../models/tag.model')
let Tool = require('../models/tool.model')

/**
 * Get all projects
 * @param req
 * @param res
 * @returns void
 */
function getProjects(req, res) {
	Project.find().populate(['course', 'creators', 'media', 'tags', 'tools']).populate({
		path: 'course',
		populate: {
				path: 'lecturers',
				model: 'Lecturer'
		}
	}).populate({
			path: 'creators',
			populate: {
					path: 'specialization',
					model: 'Specialization',
					populate: {
							path: 'option',
							model: 'Option'
					}
			}
	}).exec((err, projects) => {
			if (err) {
				res.status(500).send(err);
			}
			res.json(projects);
		});
	}
module.exports.getProjects = getProjects;

/**
 * Get project by id
 * @param req
 * @param res
 * @returns void
 */
function getProjectById(req, res) {
	Project.findOne({ _id: req.params.id }).populate(['course', 'creators', 'media', 'tags', 'tools']).populate({
		path: 'course',
		populate: {
				path: 'lecturers',
				model: 'Lecturer'
		}
	}).populate({
			path: 'creators',
			populate: {
					path: 'specialization',
					model: 'Specialization',
					populate: {
							path: 'option',
							model: 'Option'
					}
			}
	}).exec((err, project) => {
			if (err) {
				res.status(500).send(err);
			}
			res.json(project);
		});
	}
	
module.exports.getProjectById = getProjectById;