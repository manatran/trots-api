const User = require('../models/user.model');
const cuid = require('cuid');
const slugify = require('slugify');
const sanitizeHtml = require('sanitize-html');
const bcrypt = require('bcryptjs');

//related schemas
let City = require('../models/city.model')
let Specialization = require('../models/specialization.model')
let Tag = require('../models/tag.model')
let SocialMedia = require('../models/socialmedia.model')
let Option = require('../models/option.model')

/**
 * Get all Users
 * @param req
 * @param res
 * @returns void
 */
function getUsers(req, res){
	User.find().populate(['hometown','prefferred_regions','specialization', 'tags','social_media']).populate({
			path: 'specialization',
			populate: {
				path: 'option',
				model: 'Option'
			}
	})
	.exec((err, users) => {
		if (err) {
			res.status(500).send(err);
		}

		res.json(users);
	});
}

module.exports.getUsers = getUsers;


/**
 * Get user by id
 * @param req
 * @param res
 * @returns void
 */
function getUserById(req, res) {
	User.findOne({ _id: req.params.id }).populate(['hometown','prefferred_regions','specialization','tags','social_media','option']).populate({
		path: 'specialization',
		populate: {
			path: 'option',
			model: 'Option'
		}
	})
	.exec((err, user) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(user);
	});
}

module.exports.getUserById = getUserById;


/**
 * Get users by type
 * @param req
 * @param res
 * @returns void
 */
function getUsersByType(req, res) {
	User.find({ type: req.params.type }).populate(['hometown','prefferred_regions','specialization','tags','social_media','option']).populate({
		path: 'specialization',
		populate: {
				path: 'option',
				model: 'Option'
		}
	})
	.exec((err, user) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(user);
	});
}

module.exports.getUsersByType = getUsersByType;


/**
 * Save a user
 * @param req
 * @param res
 * @returns void
 */
function addUser(req, res) {
	console.log(req.body.username)
  if (!req.body.username || !req.body.password || !req.body.type) {
    res.status(403).end();
  }

  const newUser = new User(req.body);

  // Let's sanitize inputs and hash password
  bcrypt.genSalt(10, function(err,salt){
		bcrypt.hash(sanitizeHtml(newUser.password), salt, function(err, hash){
			newUser.password = hash;
			newUser.save((err, saved) => {
				if (err) {
					res.status(500).send(err);
				}
				res.json({ user: saved });
			});
		})
	})  
}

module.exports.addUser = addUser;


/**
 * Edit user
 * @param req
 * @param res
 * @returns void
 */
function editUser(req, res) {
	User.findOneAndUpdate({ _id: req.params.id },req.body)
	.exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json({ user });
		
  });
}

module.exports.editUser = editUser;


/**
 * Delete user
 * @param req
 * @param res
 * @returns void
 */
function deleteUser(req, res) {
  User.findOne({ _id: req.params.id }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }

    user.remove(() => {
      res.status(200).end();
		});
		
  });
}

module.exports.deleteUser = deleteUser;