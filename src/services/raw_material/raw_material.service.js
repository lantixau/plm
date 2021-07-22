const httpStatus = require('http-status');
const { RawMaterial } = require('../../models');
const ApiError = require('../../utils/ApiError');

const singularName = 'Raw Material';

/**
 * Create a new document
 * @param {Object} body
 * @returns {Promise<QueryResult>}
 */
const create = async (body) => {
  if (await RawMaterial.isNameTaken(body.name))
    throw new ApiError(httpStatus.BAD_REQUEST, singularName + ' name already taken');
  const response = await RawMaterial.create(body);
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
  const response = await RawMaterial.paginate(filter, options);
  if (options['exclude']) {
    response.results = response.results.filter(function (r) {
      return r._id != options['exclude'];
    });
  }
  return response;
};

/**
 * Get document by id
 * @param {ObjectId} id
 * @returns {Promise<QueryResult>}
 */
const getById = async (id) => {
  return await RawMaterial.findOne({ _id: id });
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
  if (updateBody.name && (await RawMaterial.isNameTaken(updateBody.name, id))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Name already taken');
  }
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
