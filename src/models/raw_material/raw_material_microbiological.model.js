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
    microbiological: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Microbiological',
      required: true,
    },
    target_value: {
      type: Number,
    },
    unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    maxi: {
      type: Number,
    },
    criteria_text: {
      type: String,
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

schema.statics.isTaken = async function (microbiological, raw_material, excludedId) {
  const result = await this.findOne({ microbiological, raw_material, _id: { $ne: excludedId } });
  return !!result;
};

schema
  .pre('findOne', Populate('microbiological'))
  .pre('find', Populate('microbiological'))
  .pre('find', Populate('unit'))
  .pre('findOne', Populate('unit'));

const RawMaterialMicrobiological = mongoose.model('RawMaterialMicrobiological', schema);

module.exports = RawMaterialMicrobiological;
