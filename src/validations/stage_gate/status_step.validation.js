const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    step: Joi.string().required(),
    project: Joi.string().custom(objectId).required(),
  }),
};

const query = {
  query: Joi.object().keys({
    step: Joi.string(),
    project: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    q: Joi.string().allow(null, ''),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getById = {
  params: Joi.object().keys({
    statusStepId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    statusStepId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      step: Joi.string(),
      project: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    statusStepId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
