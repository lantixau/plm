const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('../plugins');
const Populate = require('../../utils/autopopulate');

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FinishedProduct',
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    stage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stage',
    },
    dependencies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
    parent_task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
    resources: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    observers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    duration: {
      type: Number,
      default: 1,
    },
    progress: {
      type: Number,
      default: 0,
    },
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StatusStep',
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(toJSON);
schema.plugin(paginate);

schema
  .pre('findOne', Populate('status'))
  .pre('find', Populate('status'))
  .pre('findOne', Populate('resources'))
  .pre('find', Populate('resources'))
  .pre('findOne', Populate('observers'))
  .pre('find', Populate('observers'))
  .pre('findOne', Populate('parent_task'))
  .pre('findOne', Populate('stage'))
  .pre('find', Populate('stage'))
  .pre('find', Populate('created_by'))
  .pre('findOne', Populate('created_by'))
  .pre('find', Populate('updated_by'))
  .pre('findOne', Populate('updated_by'));

schema.statics.isNameTaken = async function (step, project, excludedId) {
  const result = await this.findOne({ step, project, _id: { $ne: excludedId } });
  return !!result;
};

const Task = mongoose.model('Task', schema);

module.exports = Task;
