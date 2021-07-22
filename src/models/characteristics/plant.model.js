const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

const Plant = mongoose.model('Plant', schema);

module.exports = Plant;
