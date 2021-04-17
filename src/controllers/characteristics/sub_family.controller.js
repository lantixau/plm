const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { subFamilyService } = require('../../services');

const createSubFamily = catchAsync(async (req, res) => {
  const subFamily = await subFamilyService.createSubFamily(req.body);
  res.status(httpStatus.CREATED).send(subFamily);
});

const getSubFamilies = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['parent']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await subFamilyService.querySubFamilies(filter, options);
  res.send(result);
});

const getSubFamily = catchAsync(async (req, res) => {
  const subFamily = await subFamilyService.getSubFamilyById(req.params.subFamilyId);
  if (!subFamily) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sub family not found');
  }
  res.send(subFamily);
});

const updateSubFamily = catchAsync(async (req, res) => {
  const subFamily = await subFamilyService.updateSubFamilyById(req.params.subFamilyId, req.body);
  res.send(subFamily);
});

const deleteSubFamily = catchAsync(async (req, res) => {
  await subFamilyService.deleteSubFamilyById(req.params.subFamilyId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSubFamily,
  getSubFamilies,
  getSubFamily,
  updateSubFamily,
  deleteSubFamily,
};
