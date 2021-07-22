const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    finished_product: Joi.string().custom(objectId).required(),
    raw_material: Joi.string().custom(objectId).required(),
    qty_used: Number,
    uom: Joi.string().custom(objectId),
    yield: Number,
    loss: Number,
    instructions: String,
    created_by: Joi.string().custom(objectId),
    updated_by: Joi.string().custom(objectId),
  }),
};

const query = {
  query: Joi.object().keys({
    finished_product: Joi.string().custom(objectId),
    raw_material: Joi.string().custom(objectId),
    qty_used: Number,
    uom: Joi.string().custom(objectId),
    yield: Number,
    loss: Number,
    instructions: String,
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
    compositionId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    compositionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      finished_product: Joi.string().custom(objectId),
      raw_material: Joi.string().custom(objectId),
      qty_used: Number,
      uom: Joi.string().custom(objectId),
      yield: Number,
      loss: Number,
      instructions: String,
      created_by: Joi.string().custom(objectId),
      updated_by: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    compositionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
