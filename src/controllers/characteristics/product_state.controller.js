const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { productStateService } = require('../../services');

const singularName = 'Product State';

const create = catchAsync(async (req, res) => {
  const response = await productStateService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['type_code']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await productStateService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await productStateService.getById(req.params.productStateId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await productStateService.updateById(req.params.productStateId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await productStateService.deleteById(req.params.productStateId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
