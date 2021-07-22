const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    type_code: Joi.number().required(),
  }),
};

const query = {
  query: Joi.object().keys({
    name: Joi.string(),
    type_code: Joi.number(),
    sortBy: Joi.string(),
    q: Joi.string().allow(null, ''),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getById = {
  params: Joi.object().keys({
    uomId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    uomId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      type_code: Joi.number(),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    uomId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
