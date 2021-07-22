const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { rawMaterialOrganolepticService } = require('../../services');

const singularName = 'Raw Material Organoleptic';

const create = catchAsync(async (req, res) => {
  const response = await rawMaterialOrganolepticService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['raw_material']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await rawMaterialOrganolepticService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await rawMaterialOrganolepticService.getById(req.params.rawMaterialOrganolepticId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  console.log(response);
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await rawMaterialOrganolepticService.updateById(req.params.rawMaterialOrganolepticId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await rawMaterialOrganolepticService.deleteById(req.params.rawMaterialOrganolepticId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
