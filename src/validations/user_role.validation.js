const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    ability: Joi.array(),
  }),
};

const query = {
  query: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    sortBy: Joi.string(),
    q: Joi.string().allow(null, ''),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getById = {
  params: Joi.object().keys({
    userRoleId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    userRoleId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      description: Joi.string(),
      ability: Joi.array(),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    userRoleId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
