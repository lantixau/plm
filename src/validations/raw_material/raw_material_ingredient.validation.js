const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    raw_material: Joi.string().custom(objectId),
    ingredient: Joi.string().custom(objectId),
    quantity: Number,
    uom: Joi.string().custom(objectId),
    mini: Number,
    maxi: Number,
    geographical_origin: Joi.string().custom(objectId),
    biological_origin: Joi.string().custom(objectId),
    gmo: Boolean,
    ionized: Boolean,
    processing_aid: Boolean,
    carrier: Boolean,
    decl_type: String,
    created_by: Joi.string().custom(objectId),
    updated_by: Joi.string().custom(objectId),
  }),
};

const query = {
  query: Joi.object().keys({
    raw_material: Joi.string().custom(objectId),
    ingredient: Joi.string().custom(objectId),
    quantity: Number,
    uom: Joi.string().custom(objectId),
    mini: Number,
    maxi: Number,
    geographical_origin: Joi.string().custom(objectId),
    biological_origin: Joi.string().custom(objectId),
    gmo: Boolean,
    ionized: Boolean,
    processing_aid: Boolean,
    carrier: Boolean,
    decl_type: String,
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
    rawMaterialIngredientId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    rawMaterialIngredientId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      raw_material: Joi.string().custom(objectId),
      ingredient: Joi.string().custom(objectId),
      quantity: Number,
      uom: Joi.string().custom(objectId),
      mini: Number,
      maxi: Number,
      geographical_origin: Joi.string().custom(objectId),
      biological_origin: Joi.string().custom(objectId),
      gmo: Boolean,
      ionized: Boolean,
      processing_aid: Boolean,
      carrier: Boolean,
      decl_type: String,
      created_by: Joi.string().custom(objectId),
      updated_by: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    rawMaterialIngredientId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
