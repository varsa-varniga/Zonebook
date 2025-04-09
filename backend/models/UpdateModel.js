const mongoose = require('mongoose');

const updateModelSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    businessEmail: { type: String, required: true },
    companyName: { type: String, required: true },
    consent: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('UpdateModel', updateModelSchema);
