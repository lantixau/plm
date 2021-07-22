const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { nutrientMethodService } = require('../../services');

const singularName = 'Nutrient Method';

const create = catchAsync(async (req, res) => {
  const response = await nutrientMethodService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await nutrientMethodService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await nutrientMethodService.getById(req.params.nutrientMethodId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await nutrientMethodService.updateById(req.params.nutrientMethodId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await nutrientMethodService.deleteById(req.params.nutrientMethodId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
