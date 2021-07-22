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
    physicochemical: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Physicochemical',
      required: true,
    },
    value: {
      type: Number,
    },
    mini: {
      type: Number,
    },
    maxi: {
      type: Number,
    },
    criteria_text: {
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

schema.statics.isTaken = async function (physicochemical, raw_material, excludedId) {
  const result = await this.findOne({ physicochemical, raw_material, _id: { $ne: excludedId } });
  return !!result;
};

schema.pre('find', Populate('physicochemical')).pre('findOne', Populate('physicochemical'));

const RawMaterialPhysicochemical = mongoose.model('RawMaterialPhysicochemical', schema);

module.exports = RawMaterialPhysicochemical;
