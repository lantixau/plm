const mongoose = require('mongoose')
const validator = require('validator')
const { toJSON, paginate} = require('../plugins')
const Populate = require('../../utils/autopopulate');

const subFamilySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,

        },
        parent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Family',
            required: true,
        },
    },
    {
        timestamps: true
    }
)

subFamilySchema.plugin(toJSON);
subFamilySchema.plugin(paginate);

subFamilySchema.statics.isNameTaken = async function(name, excludedId){
    const result = await this.findOne({name, _id: { $ne: excludedId }});
    return !!result;
}

const SubFamily = mongoose.model('SubFamily', subFamilySchema);

module.exports = SubFamily;