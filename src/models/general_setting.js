const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
const Populate = require('../utils/autopopulate');

const schema = mongoose.Schema(
  {
    tenant_name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    documents_id: {
      type: String,
      trim: true,
      unique: true,
    },
    documents_raw_material_id: {
      type: String,
      trim: true,
      unique: true,
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

const GeneralSetting = mongoose.model('GeneralSetting', schema);

module.exports = GeneralSetting;
