const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    businessEmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid Company email!`
        }
    },
    businessPhoneNumber: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10,15}$/.test(v);
            },
            message: props => `${props.value} is not a valid Company phone number!`
        }
    },
    companyName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    officeHQLocation: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    jobTitle: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    companySize: {
        type: String,
        required: true,
        enum: [
            "1-10",
            "11-50",
            "51-200",
            "201-500",
            "501-1000",
            "1001-5000",
            "5001+"
        ]
    },
});

module.exports = mongoose.model("Company", CompanySchema);
