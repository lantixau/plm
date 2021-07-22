const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    fullName: Joi.string().required(),
    username: Joi.string().required(),
    role: Joi.string().custom(objectId),
    biodata: Joi.string(),
    birthdate: Joi.date(),
    country: Joi.string().custom(objectId),
    website: Joi.string(),
    phone: Joi.string(),
    twitter: Joi.string(),
    facebook: Joi.string(),
    linkedIn: Joi.string(),
    instagram: Joi.string(),
    quora: Joi.string(),
    ability: Joi.array(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    fullName: Joi.string(),
    username: Joi.string(),
    role: Joi.string().custom(objectId),
    biodata: Joi.string(),
    birthdate: Joi.date(),
    country: Joi.string().custom(objectId),
    website: Joi.string(),
    phone: Joi.string(),
    twitter: Joi.string(),
    facebook: Joi.string(),
    linkedIn: Joi.string(),
    instagram: Joi.string(),
    quora: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      fullName: Joi.string(),
      username: Joi.string(),
      role: Joi.string().custom(objectId),
      biodata: Joi.string(),
      birthdate: Joi.date(),
      country: Joi.string().custom(objectId),
      website: Joi.string(),
      phone: Joi.string(),
      twitter: Joi.string(),
      facebook: Joi.string(),
      linkedIn: Joi.string(),
      instagram: Joi.string(),
      quora: Joi.string(),
      ability: Joi.array(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
