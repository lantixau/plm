const mongoose = require('mongoose')
const validator = require('validator')
const { toJSON, paginate} = require('../plugins')
const Populate = require('../../utils/autopopulate');

const familySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,

        },
        type_code: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

familySchema.plugin(toJSON);
familySchema.plugin(paginate);

familySchema.statics.isNameTaken = async function(name, excludedId){
    const result = await this.findOne({name, _id: { $ne: excludedId }});
    return !!result;
}

const Family = mongoose.model('Family', familySchema);

module.exports = Family;