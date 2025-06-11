const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    nameOnCard: {
        type: String,
        required: false,
        trim: true,
        minlength: 2,
        maxlength: 50,
        validate: {
            validator: function (v) {
                return /^[A-Za-z\s]+$/.test(v);
            },
            message: props => `${props.value} is not a valid name! Only letters and spaces are allowed.`
        }
    },
    expDate: {
        type: String,
        required: false,
        validate: {
            validator: function (v) {
                return /^(0[1-9]|1[0-2])\/\d{4}$/.test(v);
            },
            message: props => `${props.value} is not a valid expiration date! Use MM/YYYY format.`
        }
    },
    postalCode: {
        type: String,
        required: false,
        validate: {
            validator: function (v) {
                return /^[0-9]{5,6}$/.test(v);
            },
            message: props => `${props.value} is not a valid postal code!`
        }
    },
    cvc: {
        type: String,
        required: false,
        validate: {
            validator: function (v) {
                return /^[0-9]{3,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid CVC! Must be 3 or 4 digits.`
        }
    }
});


const userSchema = mongoose.Schema({
    UserName:{
        required:false,
        type:String,
        unique: true,
        sparse: true,
        minlength: 3, 
        maxlength: 30,
        validate: {
            validator: function(v) {
                return v === null || /^[a-zA-Z0-9_]+$/.test(v);
            },
            message: props => `${props.value} is not a valid username! Only letters, numbers, and underscores are allowed.`
        },
    },    
    email: {
        type: String,
        required: false,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
    },
    password: {
        type: String,
        required: false,
        minlength: 8, 
        
    },
    FirstName: {
        type: String,
        required: false,
        minlength: 2,  
        maxlength: 50, 
        trim: true,    
        validate: {
            validator: function (v) {
                return /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(v);
            },
            message: props => `${props.value} is not a valid name! Only letters and spaces are allowed.`
        }
    },
    LastName: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 50,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(v);
            },
            message: props => `${props.value} is not a valid name! Only letters and spaces are allowed.`
        }
    },
    phoneNumber: {
        type: String,
        required: false,
        validate: {
            validator: function (v) {
                return v == null || /^[0-9]{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number! It must be 10 digits.`
        }
    },
    CardDetails:{
        type:billingSchema,
        required:false,
    },
    Credits: {
        type: Number,
        required: false,
        min: 0,
        validate: {
            validator: function (v) {
                return Number.isInteger(v); 
            },
            message: props => `${props.value} is not a valid credit amount!.`,
        },
    },
    IsActivePlan:{
        type:Boolean,
        required:false,
        default:false,
    },
    IsFreeTrial:{
        type:Boolean,
        required:false,
        default:false,
    },
    Interests:{
        type:[String],
        required:false,
    },
    LocationData:{
        type:[String],
        required:false,
    },

})

module.exports = mongoose.model("User",userSchema);