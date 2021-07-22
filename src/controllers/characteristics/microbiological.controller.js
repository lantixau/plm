const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { microbiologicalService } = require('../../services');

const singularName = 'Microbiological';

const create = catchAsync(async (req, res) => {
  const response = await microbiologicalService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await microbiologicalService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await microbiologicalService.getById(req.params.microbiologicalId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await microbiologicalService.updateById(req.params.microbiologicalId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await microbiologicalService.deleteById(req.params.microbiologicalId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
