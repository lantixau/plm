const httpStatus = require('http-status');
const { UserRole } = require('../models');
const ApiError = require('../utils/ApiError');

const singularName = 'User Role';

/**
 * Create a new document
 * @param {Object} body
 * @returns {Promise<QueryResult>}
 */
const create = async (body) => {
  if (await UserRole.isNameTaken(body.name))
    throw new ApiError(httpStatus.BAD_REQUEST, singularName + ' name already taken');
  const response = await UserRole.create(body);
  return response;
};

/**
 * Query for documents
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const query = async (filter, options) => {
  const response = await UserRole.paginate(filter, options);
  return response;
};

/**
 * Get document by id
 * @param {ObjectId} id
 * @returns {Promise<QueryResult>}
 */
const getById = async (id) => {
  return await UserRole.findOne({ _id: id });
};

/**
 * Update document by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<QueryResult>}
 */
const updateById = async (id, updateBody) => {
  const response = await getById(id);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  if (updateBody.name && (await UserRole.isNameTaken(updateBody.name, id))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Name already taken');
  }
  if (updateBody.ability.length > 0) {
    updateBody.ability.forEach((rule) => {
      const existingRule = response.ability.find((dbRule) => dbRule.id === rule._id);
      if (rule.deleteThisRule === true) {
        const existingRuleIndex = response.ability.findIndex((dbRule) => dbRule.id === rule._id);
        response.ability.splice(existingRuleIndex, 1);
      } else {
        if (existingRule) {
          if (rule.actions && rule.subject) {
            existingRule.actions = rule.actions;
          }
          if (rule.subject) {
            existingRule.subject = rule.subject;
          }
        } else {
          if (rule.actions && rule.subject) user.ability.push(rule);
        }
      }
    });
  }
  delete updateBody.ability;
  Object.assign(response, updateBody);
  await response.save();
  return response;
};

/**
 * Delete document by id
 * @param {ObjectId} id
 * @returns {Document}
 */
const deleteById = async (id) => {
  const response = await getById(id);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  await response.remove();
  return response;
};

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
