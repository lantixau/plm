const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('../plugins');
const Populate = require('../../utils/autopopulate');

const schema = mongoose.Schema(
  {
    finished_product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RawMaterial',
      required: true,
    },
    organoleptic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organoleptic',
      required: true,
    },
    value: {
      type: String,
      trim: true,
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

schema.statics.isTaken = async function (organoleptic, finishedProduct, excludedId) {
  const result = await this.findOne({
    organoleptic,
    finished_product: finishedProduct,
    _id: { $ne: excludedId },
  });
  return !!result;
};

schema.pre('find', Populate('organoleptic')).pre('findOne', Populate('organoleptic'));

const FinishedProductOrganoleptic = mongoose.model('FinishedProductOrganoleptic', schema);

module.exports = FinishedProductOrganoleptic;
