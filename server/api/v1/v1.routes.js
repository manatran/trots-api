import express from 'express';
import ProjectController from './controllers/project.controller';
import UserController from './controllers/user.controller';

const router = express.Router();
router.route('/projects').get(ProjectController.getProjects);
router.route('/project/:id').get(ProjectController.getProjectById);
router.route('/projects/:type').get(ProjectController.getProjectsByType);
router.route('/projects').post(ProjectController.addProject);
router.route('/project/:id').put(ProjectController.editProject);
router.route('/project/:id').delete(ProjectController.deleteProject);

router.route('/users').get(UserController.getUsers);
router.route('/user/:id').get(UserController.getUserById);
router.route('/users/:type').get(UserController.getUsersByType);
router.route('/users').post(UserController.addUser);
router.route('/user/:id').put(UserController.editUser);
router.route('/user/:id').delete(UserController.deleteUser);

module.exports = router;
