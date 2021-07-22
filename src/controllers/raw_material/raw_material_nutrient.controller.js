const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { rawMaterialNutrientService } = require('../../services');

const singularName = 'Raw Material Nutrient';

const create = catchAsync(async (req, res) => {
  const response = await rawMaterialNutrientService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['raw_material']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await rawMaterialNutrientService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await rawMaterialNutrientService.getById(req.params.rawMaterialNutrientId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  console.log(response);
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await rawMaterialNutrientService.updateById(req.params.rawMaterialNutrientId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await rawMaterialNutrientService.deleteById(req.params.rawMaterialNutrientId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
