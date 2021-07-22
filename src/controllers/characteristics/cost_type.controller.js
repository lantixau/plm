const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { costTypeService } = require('../../services');

const singularName = 'CostType';

const create = catchAsync(async (req, res) => {
  const response = await costTypeService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await costTypeService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await costTypeService.getById(req.params.costTypeId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await costTypeService.updateById(req.params.costTypeId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await costTypeService.deleteById(req.params.costTypeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
