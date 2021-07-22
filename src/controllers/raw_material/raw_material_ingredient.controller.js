const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { rawMaterialIngredientService } = require('../../services');

const singularName = 'Raw Material Ingredient';

const create = catchAsync(async (req, res) => {
  const response = await rawMaterialIngredientService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['raw_material']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await rawMaterialIngredientService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await rawMaterialIngredientService.getById(req.params.rawMaterialIngredientId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await rawMaterialIngredientService.updateById(req.params.rawMaterialIngredientId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await rawMaterialIngredientService.deleteById(req.params.rawMaterialIngredientId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
