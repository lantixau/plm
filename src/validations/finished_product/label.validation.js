const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    finished_product: Joi.string().custom(objectId),
    label: Joi.string().required(),
    default: Boolean,
    created_by: Joi.string().custom(objectId),
    updated_by: Joi.string().custom(objectId),
  }),
};

const query = {
  query: Joi.object().keys({
    finished_product: Joi.string().custom(objectId),
    label: Joi.string(),
    default: Boolean,
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    q: Joi.string().allow(null, ''),
    created_by: Joi.string().custom(objectId),
    updated_by: Joi.string().custom(objectId),
  }),
};

const getById = {
  params: Joi.object().keys({
    labelId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    labelId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      finished_product: Joi.string().custom(objectId),
      label: Joi.string(),
      default: Boolean,
      created_by: Joi.string().custom(objectId),
      updated_by: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    labelId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
