const Joi = require('joi');
const { objectId } = require('../custom.validation');

const create = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    project: Joi.string().custom(objectId),
    description: Joi.string(),
    stage: Joi.string().custom(objectId),
    dependencies: Joi.string().custom(objectId),
    parent_task: Joi.string().custom(objectId),
    resources: Joi.array(),
    observers: Joi.array(),
    duration: Joi.number(),
    progress: Joi.number(),
    start: Joi.date(),
    end: Joi.date(),
    status: Joi.string().custom(objectId),
  }),
};

const query = {
  query: Joi.object().keys({
    title: Joi.string(),
    project: Joi.string().custom(objectId),
    description: Joi.string(),
    stage: Joi.string().custom(objectId).allow(null, ''),
    dependencies: Joi.string().custom(objectId),
    parent_task: Joi.string().custom(objectId),
    resources: Joi.array(),
    observers: Joi.array(),
    duration: Joi.number(),
    progress: Joi.number(),
    start: Joi.date(),
    end: Joi.date(),
    status: Joi.string().custom(objectId),
    sortBy: Joi.string().allow(null, ''),
    q: Joi.string().allow(null, ''),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getById = {
  params: Joi.object().keys({
    taskId: Joi.string().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    taskId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      id: Joi.required().custom(objectId),
      title: Joi.string(),
      project: Joi.string().custom(objectId),
      description: Joi.string(),
      stage: Joi.string().custom(objectId),
      dependencies: Joi.string().custom(objectId),
      parent_task: Joi.string().custom(objectId),
      resources: Joi.array(),
      observers: Joi.array(),
      duration: Joi.number(),
      progress: Joi.number(),
      start: Joi.date(),
      end: Joi.date(),
      status: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    taskId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
