const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const query = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    q: Joi.string().allow(null, ''),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getById = {
  params: Joi.object().keys({
    costTypeId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    costTypeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    costTypeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
