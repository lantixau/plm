const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { uomService } = require('../../services');

const singularName = 'UOM';

const create = catchAsync(async (req, res) => {
  const response = await uomService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['type_code']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await uomService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await uomService.getById(req.params.uomId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await uomService.updateById(req.params.uomId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await uomService.deleteById(req.params.uomId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
