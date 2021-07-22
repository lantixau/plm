const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('../plugins');
const Populate = require('../../utils/autopopulate');

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    trade_name: {
      type: String,
      trim: true,
    },
    family: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Family',
    },
    sub_family: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubFamily',
    },
    legal_name: {
      type: String,
      trim: true,
    },
    comments: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    packaging_description: {
      type: String,
      trim: true,
    },
    state_of_product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductState',
    },
    EAN: {
      type: String,
      trim: true,
    },
    UOM: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
      required: true,
    },
    density: {
      type: Number,
    },
    loss: {
      type: Number,
    },
    product_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductType',
    },
    CEE_code: {
      type: String,
      trim: true,
    },
    erp_code: {
      type: String,
      trim: true,
    },
    use_by_date: {
      type: Date,
      trim: true,
    },
    best_before_date: {
      type: Number,
      trim: true,
    },
    best_before_date_unit: {
      type: String,
      trim: true,
    },
    period_after_opening: {
      type: Number,
    },
    period_after_opening_unit: {
      type: String,
      trim: true,
    },
    minimum_life_delivery: {
      type: Number,
    },
    minimum_life_delivery_unit: {
      type: String,
      trim: true,
    },
    storage_conditions: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StorageCondition',
    },
    precaution_of_use: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PrecautionOfUse',
    },
    preparation_tips: {
      type: String,
      trim: true,
    },
    certificate_date: {
      type: Date,
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    geographicalOrigin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Area',
    },
    documentsId: {
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

schema.statics.isNameTaken = async function (name, excludedId) {
  const result = await this.findOne({ name, _id: { $ne: excludedId } });
  return !!result;
};

schema
  .pre('findOne', Populate('UOM'))
  .pre('findOne', Populate('family'))
  .pre('findOne', Populate('sub_family'))
  .pre('findOne', Populate('state_of_product'))
  .pre('findOne', Populate('product_type'))
  .pre('findOne', Populate('period_after_opening_unit'))
  .pre('findOne', Populate('minimum_life_delivery_unit'))
  .pre('findOne', Populate('precaution_of_use'))
  .pre('find', Populate('created_by'))
  .pre('findOne', Populate('created_by'))
  .pre('find', Populate('supplier'))
  .pre('findOne', Populate('supplier'))
  .pre('find', Populate('geographicalOrigin'))
  .pre('findOne', Populate('geographicalOrigin'))
  .pre('find', Populate('updated_by'))
  .pre('findOne', Populate('updated_by'));

const RawMaterial = mongoose.model('RawMaterial', schema);

module.exports = RawMaterial;
