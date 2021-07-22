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
    nutrient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Nutrient',
      required: true,
    },
    value: {
      type: Number,
    },
    value_unit: {
      type: String,
    },
    mini: {
      type: Number,
    },
    maxi: {
      type: Number,
    },
    percent_loss: {
      type: Number,
    },
    method: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NutrientMethod',
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

schema.statics.isTaken = async function (nutrient, finishedProduct, excludedId) {
  const result = await this.findOne({
    nutrient,
    finished_product: finishedProduct,
    _id: { $ne: excludedId },
  });
  return !!result;
};

schema
  .pre('findOne', Populate('nutrient'))
  .pre('find', Populate('nutrient'))
  .pre('find', Populate('method'))
  .pre('findOne', Populate('method'));

const FinishedProductNutrient = mongoose.model('FinishedProductNutrient', schema);

module.exports = FinishedProductNutrient;
