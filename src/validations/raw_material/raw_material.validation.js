const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    trade_name: Joi.string(),
    family: Joi.string().custom(objectId),
    sub_family: Joi.string().custom(objectId),
    legal_name: Joi.string(),
    comments: Joi.string(),
    description: Joi.string(),
    state_of_product: Joi.string().custom(objectId),
    EAN: Joi.string(),
    UOM: Joi.string().required().custom(objectId),
    density: Joi.number(),
    loss: Joi.number(),
    product_type: Joi.string().custom(objectId),
    CEE_code: Joi.string(),
    use_by_date: Joi.date(),
    best_before_date: Joi.date(),
    period_after_opening: Joi.number(),
    period_after_opening_unit: Joi.string().custom(objectId),
    minimum_life_delivery: Joi.number(),
    minimum_life_delivery_unit: Joi.string().custom(objectId),
    storage_conditions: Joi.string().custom(objectId),
    precaution_of_use: Joi.string().custom(objectId),
    preparation_tips: Joi.string(),
    certificate_date: Joi.date(),
  }),
};

const query = {
  query: Joi.object().keys({
    name: Joi.string(),
    trade_name: Joi.string(),
    family: Joi.string().custom(objectId),
    sub_family: Joi.string().custom(objectId),
    legal_name: Joi.string(),
    comments: Joi.string(),
    description: Joi.string(),
    state_of_product: Joi.string().custom(objectId),
    EAN: Joi.string(),
    UOM: Joi.string().custom(objectId),
    density: Joi.number(),
    loss: Joi.number(),
    product_type: Joi.string().custom(objectId),
    CEE_code: Joi.string(),
    use_by_date: Joi.date(),
    best_before_date: Joi.date(),
    period_after_opening: Joi.number(),
    period_after_opening_unit: Joi.string().custom(objectId),
    minimum_life_delivery: Joi.number(),
    minimum_life_delivery_unit: Joi.string().custom(objectId),
    storage_conditions: Joi.string().custom(objectId),
    precaution_of_use: Joi.string().custom(objectId),
    preparation_tips: Joi.string(),
    certificate_date: Joi.date(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getById = {
  params: Joi.object().keys({
    rawMaterialId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    rawMaterialId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      trade_name: Joi.string(),
      family: Joi.string().custom(objectId),
      sub_family: Joi.string().custom(objectId),
      legal_name: Joi.string(),
      comments: Joi.string(),
      description: Joi.string(),
      state_of_product: Joi.string().custom(objectId),
      EAN: Joi.string(),
      UOM: Joi.string().custom(objectId),
      density: Joi.number(),
      loss: Joi.number(),
      product_type: Joi.string().custom(objectId),
      CEE_code: Joi.string(),
      use_by_date: Joi.date(),
      best_before_date: Joi.date(),
      period_after_opening: Joi.number(),
      period_after_opening_unit: Joi.string().custom(objectId),
      minimum_life_delivery: Joi.number(),
      minimum_life_delivery_unit: Joi.string().custom(objectId),
      storage_conditions: Joi.string().custom(objectId),
      precaution_of_use: Joi.string().custom(objectId),
      preparation_tips: Joi.string(),
      certificate_date: Joi.date(),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    rawMaterialId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
