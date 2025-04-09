const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  businessName: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  businessType: { type: String, required: true },
  schedulingPlatform: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  marketingConsent: { type: Boolean, required: true },
  phoneCode: { type: String, required: true },
}, { timestamps: true });

const DemoRequest = mongoose.model('DemoRequest', demoSchema);

module.exports = DemoRequest;
