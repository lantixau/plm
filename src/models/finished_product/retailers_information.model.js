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
    cost_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CostType',
      required: true,
    },
    cost_value: {
      type: Number,
    },
    uom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    pref_rank: {
      type: Number,
    },
    purchase_quantity: {
      type: Number,
    },
    purchase_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    suppliers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    geographicalOrigin: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Area',
      },
    ],
    start_of_effectivity: {
      type: Date,
    },
    end_of_effectivity: {
      type: Date,
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

schema.statics.isTaken = async function (costType, finishedProduct, excludedId) {
  const result = await this.findOne({
    cost_type: costType,
    finished_product: finishedProduct,
    _id: { $ne: excludedId },
  });
  return !!result;
};

schema
  .pre('findOne', Populate('uom'))
  .pre('find', Populate('uom'))
  .pre('find', Populate('cost_type'))
  .pre('findOne', Populate('cost_type'));

const FinishedProductRetailersInformation = mongoose.model('FinishedProductRetailersInformation', schema);

module.exports = FinishedProductRetailersInformation;
