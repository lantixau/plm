const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { productTypeService } = require('../../services');

const singularName = 'Product Type';

const create = catchAsync(async (req, res) => {
  const response = await productTypeService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['type_code']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await productTypeService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await productTypeService.getById(req.params.productTypeId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await productTypeService.updateById(req.params.productTypeId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await productTypeService.deleteById(req.params.productTypeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
