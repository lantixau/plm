const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { finishedProductService } = require('../../services');

const singularName = 'Finished Product';

const create = catchAsync(async (req, res) => {
  const response = await finishedProductService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['type_code']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await finishedProductService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await finishedProductService.getById(req.params.finsihedProductId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  console.log(response);
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await finishedProductService.updateById(req.params.finsihedProductId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await finishedProductService.deleteById(req.params.finsihedProductId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
