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
    packaging_description: Joi.string(),
    state_of_product: Joi.string().custom(objectId),
    EAN: Joi.string(),
    UOM: Joi.string().required().custom(objectId),
    density: Joi.number(),
    loss: Joi.number(),
    product_type: Joi.string().custom(objectId),
    CEE_code: Joi.string(),
    erp_code: Joi.string(),
    use_by_date: Joi.date(),
    best_before_date: Joi.date(),
    best_before_date_unit: Joi.string(),
    period_after_opening: Joi.number(),
    period_after_opening_unit: Joi.string(),
    minimum_life_delivery: Joi.number(),
    minimum_life_delivery_unit: Joi.string(),
    storage_conditions: Joi.string().custom(objectId),
    precaution_of_use: Joi.string().custom(objectId),
    preparation_tips: Joi.string(),
    certificate_date: Joi.date(),
    created_by: Joi.string().custom(objectId),
    updated_by: Joi.string().custom(objectId),
    supplier: Joi.string().custom(objectId),
    geographicalOrigin: Joi.string().custom(objectId),
  }),
};

const query = {
  query: Joi.object().keys({
    name: Joi.string(),
    trade_name: Joi.string(),
    q: Joi.string().allow(null, ''),
    family: Joi.string().custom(objectId),
    sub_family: Joi.string().custom(objectId),
    legal_name: Joi.string(),
    comments: Joi.string(),
    description: Joi.string(),
    packaging_description: Joi.string(),
    state_of_product: Joi.string().custom(objectId),
    EAN: Joi.string(),
    UOM: Joi.string().custom(objectId),
    density: Joi.number(),
    loss: Joi.number(),
    product_type: Joi.string().custom(objectId),
    CEE_code: Joi.string(),
    erp_code: Joi.string(),
    use_by_date: Joi.date(),
    best_before_date: Joi.date(),
    best_before_date_unit: Joi.string(),
    period_after_opening: Joi.number(),
    period_after_opening_unit: Joi.string(),
    minimum_life_delivery: Joi.number(),
    minimum_life_delivery_unit: Joi.string(),
    storage_conditions: Joi.string().custom(objectId),
    precaution_of_use: Joi.string().custom(objectId),
    preparation_tips: Joi.string(),
    certificate_date: Joi.date(),
    supplier: Joi.string().custom(objectId),
    geographicalOrigin: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    created_by: Joi.string().custom(objectId),
    updated_by: Joi.string().custom(objectId),
    exclude: Joi.string().custom(objectId),
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
      packaging_description: Joi.string(),
      state_of_product: Joi.string().custom(objectId),
      EAN: Joi.string(),
      UOM: Joi.string().custom(objectId),
      density: Joi.number(),
      loss: Joi.number(),
      product_type: Joi.string().custom(objectId),
      CEE_code: Joi.string(),
      erp_code: Joi.string(),
      use_by_date: Joi.date(),
      best_before_date: Joi.date(),
      best_before_date_unit: Joi.string(),
      period_after_opening: Joi.number(),
      period_after_opening_unit: Joi.string(),
      minimum_life_delivery: Joi.number(),
      minimum_life_delivery_unit: Joi.string(),
      storage_conditions: Joi.string().custom(objectId),
      precaution_of_use: Joi.string().custom(objectId),
      preparation_tips: Joi.string(),
      supplier: Joi.string().custom(objectId),
      geographicalOrigin: Joi.string().custom(objectId),
      certificate_date: Joi.date(),
      documentsId: Joi.string(),
      created_by: Joi.string().custom(objectId),
      updated_by: Joi.string().custom(objectId),
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
