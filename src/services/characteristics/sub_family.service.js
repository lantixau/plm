const httpStatus = require('http-status');
const { SubFamily } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a sub family
 * @param {Object} subFamilyBody
 * @returns {Promise<SubFamily>}
 */
const createSubFamily = async (subFamilyBody) => {
  if (await SubFamily.isNameTaken(subFamilyBody.name))
    throw new ApiError(httpStatus.BAD_REQUEST, 'Sub family name already taken');
  const subFamily = await SubFamily.create(subFamilyBody);
  return subFamily;
};

/**
 * Query for families
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySubFamilies = async (filter, options) => {
  const subFamilies = await SubFamily.paginate(filter, options);
  return subFamilies;
};

/**
 * Get sub family by id
 * @param {ObjectId} id
 * @returns {Promise<SubFamily>}
 */
const getSubFamilyById = async (id) => {
  return (await SubFamily.findOne({_id: id}));
};

/**
 * Update family by id
 * @param {ObjectId} familyId
 * @param {Object} updateBody
 * @returns {Promise<SubFamily>}
 */
const updateSubFamilyById = async (subFamilyId, updateBody) => {
  const subFamily = await getSubFamilyById(subFamilyId);
  if (!subFamily) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sub family not found');
  }
  if (updateBody.name && (await SubFamily.isNameTaken(updateBody.name, subFamilyId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Name already taken');
  }
  Object.assign(subFamily, updateBody);
  await subFamily.save();
  return subFamily;
};

/**
 * Delete sub family by id
 * @param {ObjectId} familyId
 * @returns {Promise<SubFamily>}
 */
const deleteSubFamilyById = async (subFamilyId) => {
  const subFamily = await getSubFamilyById(subFamilyId);
  if (!subFamily) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sub family not found');
  }
  await subFamily.remove();
  return subFamily;
};

module.exports = {
  createSubFamily,
  querySubFamilies,
  getSubFamilyById,
  updateSubFamilyById,
  deleteSubFamilyById,
};