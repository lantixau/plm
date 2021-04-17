const mongoose = require('mongoose')
const validator = require('validator')
const { toJSON, paginate} = require('../plugins')
const Populate = require('../../utils/autopopulate');

const schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
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

schema.plugin(toJSON);
schema.plugin(paginate);

schema.statics.isNameTaken = async function(name, excludedId){
    const result = await this.findOne({name, _id: { $ne: excludedId }});
    return !!result;
}

const ProductType = mongoose.model('ProductType', schema);

module.exports = ProductType;