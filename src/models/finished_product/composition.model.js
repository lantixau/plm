const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('../plugins');
const Populate = require('../../utils/autopopulate');

const schema = mongoose.Schema(
  {
    finished_product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FinishedProduct',
      required: true,
    },
    raw_material: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RawMaterial',
      required: true,
    },
    qty_used: {
      type: Number,
    },
    uom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    yield: {
      type: Number,
    },
    loss: {
      type: Number,
    },
    instructions: {
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

schema.statics.isTaken = async function (rawMaterial, finishedProduct, excludedId) {
  const result = await this.findOne({
    raw_material: rawMaterial,
    finished_product: finishedProduct,
    _id: { $ne: excludedId },
  });
  return !!result;
};

schema
  .pre('findOne', Populate('uom'))
  .pre('find', Populate('uom'))
  .pre('findOne', Populate('raw_material'))
  .pre('find', Populate('raw_material'));

const FinishedProductComposition = mongoose.model('FinishedProductComposition', schema);

module.exports = FinishedProductComposition;
