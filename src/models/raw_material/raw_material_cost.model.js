const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('../plugins');
const Populate = require('../../utils/autopopulate');

const schema = mongoose.Schema(
  {
    raw_material: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RawMaterial',
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
    n_minus_one_value: {
      type: Number,
    },
    n_plus_one_value: {
      type: Number,
    },
    simulated: {
      type: Number,
    },
    manual: {
      type: Boolean,
      default: false,
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

schema.statics.isTaken = async function (cost_type, raw_material, excludedId) {
  const result = await this.findOne({ cost_type, raw_material, _id: { $ne: excludedId } });
  return !!result;
};

schema
  .pre('findOne', Populate('uom'))
  .pre('find', Populate('uom'))
  .pre('find', Populate('cost_type'))
  .pre('findOne', Populate('cost_type'));

const RawMaterialCost = mongoose.model('RawMaterialCost', schema);

module.exports = RawMaterialCost;
