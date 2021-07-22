const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { physicochemicalService } = require('../../services');

const singularName = 'Physicochemical';

const create = catchAsync(async (req, res) => {
  const response = await physicochemicalService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await physicochemicalService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await physicochemicalService.getById(req.params.physicochemicalId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await physicochemicalService.updateById(req.params.physicochemicalId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await physicochemicalService.deleteById(req.params.physicochemicalId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
