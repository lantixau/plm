const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    ability: [
      {
        actions: [String],
        subject: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} name - The user's role name
 * @param {ObjectId} [excludeUserId] - The id of the user role to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isNameTaken = async function (name, excludeUserId) {
  const userRole = await this.findOne({ name, _id: { $ne: excludeUserId } });
  return !!userRole;
};

const UserRole = mongoose.model('UserRole', userSchema);

module.exports = UserRole;
