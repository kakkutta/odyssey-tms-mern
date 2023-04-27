const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpaceProviderSchema = new Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    lastName: { type: String, required: true },
    serviceType: { type: String, required: true },
    telNo: { type: String, required: true },
    nic: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true,
})

module.exports = SpaceProvider = mongoose.model("spaceProviders", SpaceProviderSchema);