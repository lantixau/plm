const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { finishedProductRetailersInformationService } = require('../../services');

const singularName = 'Finished Product Retailers Information';

const create = catchAsync(async (req, res) => {
  const response = await finishedProductRetailersInformationService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['finished_product']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await finishedProductRetailersInformationService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await finishedProductRetailersInformationService.getById(req.params.retailersInformationId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  console.log(response);
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await finishedProductRetailersInformationService.updateById(req.params.retailersInformationId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await finishedProductRetailersInformationService.deleteById(req.params.retailersInformationId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
