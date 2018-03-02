const Project = require('../models/project.model');
const cuid = require('cuid');
const slugify = require('slugify');
const sanitizeHtml = require('sanitize-html');

//related schemas
let Course = require('../models/course.model')
let User = require('../models/user.model')
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
				model: 'User'
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
	})
	.exec((err, projects) => {
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
			model: 'User'
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
	})
	.exec((err, project) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(project);
	});
}

module.exports.getProjectById = getProjectById;


/**
 * Get projects by type
 * @param req
 * @param res
 * @returns void
 */
function getProjectsByType(req, res) {
	Project.find({ type: req.params.type }).populate(['course', 'creators', 'media', 'tags', 'tools']).populate({
		path: 'course',
		populate: {
			path: 'lecturers',
			model: 'User'
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
	})
	.exec((err, project) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(project);
	});
}

module.exports.getProjectsByType = getProjectsByType;

/**
 * Save a project
 * @param req
 * @param res
 * @returns void
 */
function addProject(req, res) {
  if (!req.body.title || !req.body.description || !req.body.type) {
    res.status(403).end();
  }

  const newProject = new Project(req.body);

  // Let's sanitize inputs and hash password
  newProject.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ project: saved });
  });
}

module.exports.addProject = addProject;


/**
 * Edit project
 * @param req
 * @param res
 * @returns void
 */
function editProject(req, res) {
	Project.findOneAndUpdate({ _id: req.params.id },req.body)
	.exec((err, project) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json({ project });
		
  });
}

module.exports.editProject = editProject;


/**
 * Delete project
 * @param req
 * @param res
 * @returns void
 */
function deleteProject(req, res) {
  Project.findOne({ _id: req.params.id }).exec((err, project) => {
    if (err) {
      res.status(500).send(err);
    }

    project.remove(() => {
      res.status(200).end();
		});
		
  });
}

module.exports.deleteProject = deleteProject;