const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { storageConditionService } = require('../../services');

const singularName = 'Storage Condition';

const create = catchAsync(async (req, res) => {
  const response = await storageConditionService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['type_code']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await storageConditionService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await storageConditionService.getById(req.params.storageConditionId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await storageConditionService.updateById(req.params.storageConditionId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await storageConditionService.deleteById(req.params.storageConditionId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
