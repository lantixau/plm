const httpStatus = require('http-status');
const { User, UserRole } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const user = await User.create(userBody);
  return user;
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  const user = await User.findById(id);
  // Merging Abilities
  const userAbilities = user.ability;
  // Fetching Role Abilities
  const userRole = await UserRole.findById(user.role);
  const roleAbilities = userRole.ability;
  // Merging Abilities
  var subjects = new Set(userAbilities.map((d) => d.subject));
  var mergedAbilities = [...userAbilities, ...roleAbilities.filter((d) => !subjects.has(d.subject))];
  user.ability = mergedAbilities;
  console.log(user.ability);
  return user;
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (updateBody.ability.length > 0) {
    updateBody.ability.forEach((rule) => {
      const existingRule = user.ability.find((dbRule) => dbRule.id === rule._id);
      if (rule.deleteThisRule === true) {
        const existingRuleIndex = user.ability.findIndex((dbRule) => dbRule.id === rule._id);
        user.ability.splice(existingRuleIndex, 1);
      } else {
        if (existingRule) {
          if (rule.actions) {
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
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
