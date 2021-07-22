const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createFamily = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    type_code: Joi.number().required(),
  }),
};

const getFamilies = {
  query: Joi.object().keys({
    name: Joi.string(),
    type_code: Joi.number(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    q: Joi.string().allow(null, ''),
  }),
};

const getFamily = {
  params: Joi.object().keys({
    familyId: Joi.string().custom(objectId),
  }),
};

const updateFamily = {
  params: Joi.object().keys({
    familyId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      type_code: Joi.number().required(),
    })
    .min(1),
};

const deleteFamily = {
  params: Joi.object().keys({
    familyId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createFamily,
  getFamilies,
  getFamily,
  updateFamily,
  deleteFamily,
};
