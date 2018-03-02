const express = require('express');
const ProjectController = require('./controllers/project.controller');
const StudentController = require('./controllers/student.controller');

const router = express.Router();
router.route('/projects').get(ProjectController.getProjects);
router.route('/project/:id').get(ProjectController.getProjectById);
router.route('/students').get(StudentController.getStudents);
router.route('/student/:id').get(StudentController.getStudentById);

module.exports = router;
