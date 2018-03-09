import User from '../models/user.model';
import cuid from 'cuid';
import slugify from 'slugify';
import sanitizeHtml from 'sanitize-html';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

// Related schemas
import City from '../models/city.model';
import Specialization from '../models/specialization.model';
import Tag from '../models/tag.model';
import SocialMedia from '../models/socialmedia.model';
import Option from '../models/option.model';

//const ObjectId = mongoose.Types.ObjectId();

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
function getUsers(req, res) {
  User.find().populate(['hometown', 'specialization', 'tags', 'social_media']).populate({
      path: 'specialization',
      populate: {
        path: 'option',
        model: 'Option',
      },
		})
		.sort('name')
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
  User.findOne({
      _id: req.params.id,
    }).populate(['hometown', 'specialization', 'tags', 'social_media', 'option']).populate({
      path: 'specialization',
      populate: {
        path: 'option',
        model: 'Option',
      },
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
  User.find({
      type: req.params.type,
    }).populate(['hometown', 'specialization', 'tags', 'social_media', 'option']).populate({
      path: 'specialization',
      populate: {
        path: 'option',
        model: 'Option',
      },
		})
		.sort('name')
    .exec((err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(user);
    });
}

module.exports.getUsersByType = getUsersByType;


/**
 * Get users by specialization
 * @param req
 * @param res
 * @returns void
 *
function getUsersBySpecialization(req, res) {
	console.log(req.params.specialization)
  User.find({
		specialization: req.params.specialization,
    }).populate(['hometown', 'specialization', 'tags', 'social_media', 'option']).populate({
      path: 'specialization',
      populate: {
        path: 'option',
        model: 'Option',
      },
		})
		.sort('name')
    .exec((err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(user);
    });
}

module.exports.getUsersBySpecialization = getUsersBySpecialization;
*/


/**
 * Save a new user
 * @param req
 * @param res
 * @returns void
 */
function addUser(req, res) {
  if (!req.body.username || !req.body.password || !req.body.type) {
    res.status(403).end();
  }

  const newUser = new User(req.body);

  // Let's sanitize inputs and hash password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(sanitizeHtml(newUser.password), salt, (err, hash) => {
      newUser.password = hash;
      newUser.save((err, saved) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json({
          user: saved,
        });
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
  User.findOneAndUpdate({
      _id: req.params.id,
    }, req.body)
    .exec((err, user) => {
      if (err) {
        res.status(500).send(err);
      }

      res.json({
        user,
      });

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
  User.findOne({
    _id: req.params.id,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }

    user.remove(() => {
      res.status(200).end();
    });

  });
}

module.exports.deleteUser = deleteUser;
