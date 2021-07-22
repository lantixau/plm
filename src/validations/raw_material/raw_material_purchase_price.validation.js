const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    raw_material: Joi.string().custom(objectId),
    cost_type: Joi.string().custom(objectId),
    cost_value: Number,
    uom: Joi.string().custom(objectId),
    pref_rank: Number,
    purchase_qty: Number,
    purchase_unit: Joi.string().custom(objectId),
    start_of_effectivity: Date,
    end_of_effectivity: Date,
    created_by: Joi.string().custom(objectId),
    updated_by: Joi.string().custom(objectId),
  }),
};

const query = {
  query: Joi.object().keys({
    raw_material: Joi.string().custom(objectId),
    cost_type: Joi.string().custom(objectId),
    cost_value: Number,
    uom: Joi.string().custom(objectId),
    pref_rank: Number,
    purchase_qty: Number,
    purchase_unit: Joi.string().custom(objectId),
    start_of_effectivity: Date,
    end_of_effectivity: Date,
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
    rawMaterialPurchasePriceId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    rawMaterialPurchasePriceId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      raw_material: Joi.string().custom(objectId),
      cost_type: Joi.string().custom(objectId),
      cost_value: Number,
      uom: Joi.string().custom(objectId),
      pref_rank: Number,
      purchase_qty: Number,
      purchase_unit: Joi.string().custom(objectId),
      start_of_effectivity: Date,
      end_of_effectivity: Date,
      created_by: Joi.string().custom(objectId),
      updated_by: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    rawMaterialPurchasePriceId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
