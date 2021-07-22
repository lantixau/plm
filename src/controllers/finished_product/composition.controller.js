const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { finishedProductCompositionService } = require('../../services');

const singularName = 'Finished Product Composition';

const create = catchAsync(async (req, res) => {
  const response = await finishedProductCompositionService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['raw_material', 'finished_product']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await finishedProductCompositionService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await finishedProductCompositionService.getById(req.params.compositionId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  console.log(response);
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await finishedProductCompositionService.updateById(req.params.compositionId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await finishedProductCompositionService.deleteById(req.params.compositionId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
