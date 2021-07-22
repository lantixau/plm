const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    finished_product: Joi.string().custom(objectId).required(),
    cost_type: Joi.string().custom(objectId).required(),
    cost_value: Number,
    uom: Joi.string().custom(objectId),
    pref_rank: Number,
    purchase_quantity: Number,
    purchase_unit: Joi.string().custom(objectId),
    suppliers: Joi.array(),
    geographicalOrigin: Joi.array(),
    start_of_effectivity: Joi.date(),
    end_of_effectivity: Joi.date(),
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
    pref_rank: Number,
    purchase_quantity: Number,
    purchase_unit: Joi.string().custom(objectId),
    suppliers: Joi.array(),
    geographicalOrigin: Joi.array(),
    start_of_effectivity: Joi.date(),
    end_of_effectivity: Joi.date(),
    created_by: Joi.string().custom(objectId),
    updated_by: Joi.string().custom(objectId),
  }),
};

const getById = {
  params: Joi.object().keys({
    retailersInformationId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    retailersInformationId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      finished_product: Joi.string().custom(objectId),
      cost_type: Joi.string().custom(objectId),
      cost_value: Number,
      uom: Joi.string().custom(objectId),
      pref_rank: Number,
      purchase_quantity: Number,
      purchase_unit: Joi.string().custom(objectId),
      suppliers: Joi.array(),
      geographicalOrigin: Joi.array(),
      start_of_effectivity: Joi.date(),
      end_of_effectivity: Joi.date(),
      created_by: Joi.string().custom(objectId),
      updated_by: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    retailersInformationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
