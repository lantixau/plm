const httpStatus = require('http-status');
const { FinishedProductLabel } = require('../../models');
const { FinishedProductComposition } = require('../../models');
const ApiError = require('../../utils/ApiError');

const singularName = 'Finished Product Label';

/**
 * Create a new document
 * @param {Object} body
 * @returns {Promise<QueryResult>}
 */
const create = async (body) => {
  const response = await FinishedProductLabel.create(body);
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
  const response = await FinishedProductLabel.paginate(filter, options);
  // Generate labels from compositions added
  const compositions = await FinishedProductComposition.find({ finished_product: filter['finished_product'] });
  console.log('Compoitoons jhere', compositions);
  if (compositions.length > 0) {
    const label = { default: true, label: '' };
    compositions.forEach(async function (composition) {
      label.label += composition.raw_material.name + ' ' + composition.qty_used + composition.uom.name + ',';
    });
    response.results.push(label);
  }
  return response;
};

/**
 * Get document by id
 * @param {ObjectId} id
 * @returns {Promise<QueryResult>}
 */
const getById = async (id) => {
  return await FinishedProductLabel.findOne({ _id: id });
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
  // if (updateBody.name && (await FinishedProductLabel.isNameTaken(updateBody.name, id))) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Name already taken');
  // }
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
