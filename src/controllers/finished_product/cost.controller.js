const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { finishedProductCostService } = require('../../services');

const singularName = 'Finished Product Cost';

const create = catchAsync(async (req, res) => {
  const response = await finishedProductCostService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['finished_product']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await finishedProductCostService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await finishedProductCostService.getById(req.params.costId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  console.log(response);
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await finishedProductCostService.updateById(req.params.costId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await finishedProductCostService.deleteById(req.params.costId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
