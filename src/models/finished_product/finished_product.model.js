const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('../plugins');
const Populate = require('../../utils/autopopulate');
const { date } = require('joi');

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
    ERP_code: {
      type: String,
      trim: true,
    },
    EAN: {
      type: String,
      trim: true,
    },
    EAN_package: {
      type: String,
      trim: true,
    },
    EAN_pallet: {
      type: String,
      trim: true,
    },
    net_quantity: {
      type: Number,
    },
    net_quantity_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    net_weight: {
      type: Number,
    },
    net_weight_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    drained_weight: {
      type: Number,
    },
    drained_weight_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    density: {
      type: Number,
    },
    net_volume: {
      type: Number,
    },
    net_volume_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    product_loss: {
      type: Number,
    },
    serving_size: {
      type: Number,
    },
    serving_size_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    serving_size_text: {
      type: String,
      trim: true,
    },
    number_of_servings: {
      type: Number,
    },
    use_by_date: {
      type: Date,
    },
    best_before_date: {
      type: Date,
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
    precaution_of_use: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PrecautionOfUse',
      },
    ],
    preparation_tips: {
      type: String,
      trim: true,
    },
    selling_price_per_sales_unit: {
      type: Number,
    },
    cost_per_sales_unit: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Currency',
    },
    projected_quantity: {
      type: Number,
    },
    profitability: {
      type: Number,
    },
    geographicalOrigin: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Area',
      },
    ],
    target_markets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Area',
      },
    ],
    plants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant',
      },
    ],
    suppliers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    documentsId: {
      type: String,
      trim: true,
    },
    number_of_products_per_box: {
      type: Number,
      trim: true,
    },
    number_of_layers_per_pallet: {
      type: Number,
      trim: true,
    },
    number_of_boxes_per_layer: {
      type: Number,
      trim: true,
    },
    number_of_boxes_per_last_layer: {
      type: Number,
      trim: true,
    },
    number_of_boxes_per_pallet: {
      type: Number,
      trim: true,
    },
    pallet_height: {
      type: Number,
      trim: true,
    },
    pallet_height_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    pallet_width: {
      type: Number,
      trim: true,
    },
    pallet_width_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    pallet_depth: {
      type: Number,
      trim: true,
    },
    pallet_depth_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    number_of_pallets_on_ground: {
      type: Number,
      trim: true,
    },
    certificate_date: {
      type: Date,
    },
    stacking_maximun_weight: {
      type: Number,
      trim: true,
    },
    stacking_maximun_weight_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    tare: {
      type: Number,
    },
    tare_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    effective_from: {
      type: Date,
    },
    effective_to: {
      type: Date,
    },
    packaging_height: {
      type: Number,
    },
    packaging_height_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    packaging_width: {
      type: Number,
    },
    packaging_width_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
    },
    packaging_depth: {
      type: Number,
    },
    packaging_depth_unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UOM',
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
  .pre('findOne', Populate('net_quantity_unit'))
  .pre('findOne', Populate('serving_size_unit'))
  // .pre('findOne', Populate('family'))
  .pre('findOne', Populate('sub_family'))
  .pre('findOne', Populate('state_of_product'))
  .pre('findOne', Populate('precaution_of_use'))
  .pre('findOne', Populate('storage_conditions'))
  .pre('findOne', Populate('currency'))
  .pre('find', Populate('created_by'))
  .pre('findOne', Populate('created_by'))
  .pre('find', Populate('supplier'))
  .pre('findOne', Populate('supplier'))
  .pre('find', Populate('geographicalOrigin'))
  .pre('findOne', Populate('geographicalOrigin'))
  .pre('find', Populate('updated_by'))
  .pre('findOne', Populate('updated_by'));

const FinishedProduct = mongoose.model('FinishedProduct', schema);

module.exports = FinishedProduct;
