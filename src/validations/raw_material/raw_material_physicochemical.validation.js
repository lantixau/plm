const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    raw_material: Joi.string().custom(objectId),
    physicochemical: Joi.string().custom(objectId),
    value: Number,
    mini: Number,
    maxi: Number,
    criteria_text: String,
    created_by: Joi.string().custom(objectId),
    updated_by: Joi.string().custom(objectId),
  }),
};

const query = {
  query: Joi.object().keys({
    raw_material: Joi.string().custom(objectId),
    physicochemical: Joi.string().custom(objectId),
    value: Number,
    mini: Number,
    maxi: Number,
    criteria_text: String,
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
    rawMaterialPhysicochemicalId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    rawMaterialPhysicochemicalId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      raw_material: Joi.string().custom(objectId),
      physicochemical: Joi.string().custom(objectId),
      value: Number,
      mini: Number,
      maxi: Number,
      criteria_text: String,
      created_by: Joi.string().custom(objectId),
      updated_by: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    rawMaterialPhysicochemicalId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
