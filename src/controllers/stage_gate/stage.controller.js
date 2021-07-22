const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { stageService } = require('../../services');

const singularName = 'Stage';

const create = catchAsync(async (req, res) => {
  const response = await stageService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'project']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await stageService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await stageService.getById(req.params.stageId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await stageService.updateById(req.params.stageId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await stageService.deleteById(req.params.stageId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
