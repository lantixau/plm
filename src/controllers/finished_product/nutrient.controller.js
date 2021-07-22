const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { finishedProductNutrientService } = require('../../services');

const singularName = 'Finished Product Nutrient';

const create = catchAsync(async (req, res) => {
  const response = await finishedProductNutrientService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['finished_product']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await finishedProductNutrientService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await finishedProductNutrientService.getById(req.params.nutrientId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  console.log(response);
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await finishedProductNutrientService.updateById(req.params.nutrientId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await finishedProductNutrientService.deleteById(req.params.nutrientId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
