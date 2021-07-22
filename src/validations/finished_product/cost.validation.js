const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    finished_product: Joi.string().custom(objectId),
    cost_type: Joi.string().custom(objectId),
    cost_value: Number,
    uom: Joi.string().custom(objectId),
    n_minus_one_value: Number,
    n_plus_one_value: Number,
    simulated: Number,
    plants: Joi.array(),
    manual: Boolean,
    created_by: Joi.string().custom(objectId),
    updated_by: Joi.string().custom(objectId),
  }),
};

const query = {
  query: Joi.object().keys({
    finished_product: Joi.string().custom(objectId),
    cost_type: Joi.string().custom(objectId),
    cost_value: Number,
    uom: Joi.string().custom(objectId),
    n_minus_one_value: Number,
    n_plus_one_value: Number,
    simulated: Number,
    manual: Boolean,
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
    costId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    costId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      finished_product: Joi.string().custom(objectId),
      cost_type: Joi.string().custom(objectId),
      cost_value: Number,
      uom: Joi.string().custom(objectId),
      n_minus_one_value: Number,
      n_plus_one_value: Number,
      simulated: Number,
      manual: Boolean,
      plants: Joi.array(),
      created_by: Joi.string().custom(objectId),
      updated_by: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    costId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
