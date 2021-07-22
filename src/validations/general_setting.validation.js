const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object().keys({
    tenant_name: Joi.string().required(),
    documents_id: Joi.string(),
    documents_raw_material_id: Joi.string(),
  }),
};

const query = {
  query: Joi.object().keys({
    tenant_name: Joi.string(),
    documents_id: Joi.string(),
    documents_raw_material_id: Joi.string(),
    sortBy: Joi.string(),
    q: Joi.string().allow(null, ''),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getById = {
  params: Joi.object().keys({
    generalSettingId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    generalSettingId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      tenant_name: Joi.string(),
      documents_id: Joi.string(),
      documents_raw_material_id: Joi.string(),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    generalSettingId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
