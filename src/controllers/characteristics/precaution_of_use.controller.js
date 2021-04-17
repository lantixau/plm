const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { precautionOfUseService } = require('../../services');

const singularName = 'Precaution Of Use';

const create = catchAsync(async (req, res) => {
  const response = await precautionOfUseService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['type_code']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await precautionOfUseService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await precautionOfUseService.getById(req.params.precautionOfUseId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await precautionOfUseService.updateById(req.params.precautionOfUseId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await precautionOfUseService.deleteById(req.params.precautionOfUseId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
