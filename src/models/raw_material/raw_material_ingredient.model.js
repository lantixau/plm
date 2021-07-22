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
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RawMaterial',
      required: true,
    },
    quantity: {
      type: Number,
    },
    uom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    mini: {
      type: Number,
    },
    maxi: {
      type: Number,
    },
    geographical_origin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Area',
    },
    biological_origin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BiologicalOrigin',
    },
    gmo: {
      type: Boolean,
    },
    ionized: {
      type: Boolean,
    },
    processing_aid: {
      type: Boolean,
    },
    carrier: {
      type: Boolean,
    },
    decl_type: {
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

schema.statics.isTaken = async function (ingredient, raw_material, excludedId) {
  const result = await this.findOne({ ingredient, raw_material, _id: { $ne: excludedId } });
  return !!result;
};

schema
  .pre('findOne', Populate('uom'))
  .pre('find', Populate('uom'))
  .pre('findOne', Populate('ingredient'))
  .pre('find', Populate('ingredient'))
  .pre('findOne', Populate('biological_origin'))
  .pre('find', Populate('biological_origin'))
  .pre('find', Populate('geographical_origin'))
  .pre('findOne', Populate('geographical_origin'));

const RawMaterialIngredient = mongoose.model('RawMaterialIngredient', schema);

module.exports = RawMaterialIngredient;
