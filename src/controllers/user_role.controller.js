const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userRoleService } = require('../services');

const singularName = 'User Role';

const create = catchAsync(async (req, res) => {
  const response = await userRoleService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await userRoleService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await userRoleService.getById(req.params.userRoleId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await userRoleService.updateById(req.params.userRoleId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await userRoleService.deleteById(req.params.userRoleId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
