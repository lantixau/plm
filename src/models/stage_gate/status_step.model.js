const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('../plugins');
const Populate = require('../../utils/autopopulate');

const schema = mongoose.Schema(
  {
    step: {
      type: String,
      trim: true,
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FinishedProduct',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(toJSON);
schema.plugin(paginate);

schema.statics.isNameTaken = async function (step, project, excludedId) {
  const result = await this.findOne({ step, project, _id: { $ne: excludedId } });
  return !!result;
};

const StatusStep = mongoose.model('StatusStep', schema);

module.exports = StatusStep;
