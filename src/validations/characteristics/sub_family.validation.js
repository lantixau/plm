const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSubFamily = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    parent: Joi.required().custom(objectId),
  }),
};

const getSubFamilies = {
  query: Joi.object().keys({
    name: Joi.string(),
    parent: Joi.custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSubFamily = {
  params: Joi.object().keys({
    subFamilyId: Joi.string().custom(objectId)
  }),
};

const updateSubFamily = {
  params: Joi.object().keys({
    subFamilyId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      parent: Joi.custom(objectId),
    })
    .min(1),
};

const deleteSubFamily = {
  params: Joi.object().keys({
    subFamilyId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSubFamily,
  getSubFamilies,
  getSubFamily,
  updateSubFamily,
  deleteSubFamily,
};
