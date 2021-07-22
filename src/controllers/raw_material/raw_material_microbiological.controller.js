const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { rawMaterialMicrobiologicalService } = require('../../services');

const singularName = 'Raw Material Microbiological';

const create = catchAsync(async (req, res) => {
  const response = await rawMaterialMicrobiologicalService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['raw_material']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await rawMaterialMicrobiologicalService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await rawMaterialMicrobiologicalService.getById(req.params.rawMaterialMicrobiologicalId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  console.log(response);
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await rawMaterialMicrobiologicalService.updateById(req.params.rawMaterialMicrobiologicalId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await rawMaterialMicrobiologicalService.deleteById(req.params.rawMaterialMicrobiologicalId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
