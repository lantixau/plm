const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { taskService } = require('../../services');

const singularName = 'Task';

const create = catchAsync(async (req, res) => {
  const response = await taskService.create(req.body);
  res.status(httpStatus.CREATED).send(response);
});

const query = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'project']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const response = await taskService.query(filter, options);
  res.send(response);
});

const getById = catchAsync(async (req, res) => {
  const response = await taskService.getById(req.params.taskId);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, singularName + ' not found');
  }
  res.send(response);
});

const updateById = catchAsync(async (req, res) => {
  const response = await taskService.updateById(req.params.taskId, req.body);
  res.send(response);
});

const deleteById = catchAsync(async (req, res) => {
  await taskService.deleteById(req.params.taskId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
