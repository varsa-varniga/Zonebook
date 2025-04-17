const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    nameOnCard: {
        type: String,
        required: true,
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
        required: true,
        validate: {
            validator: function (v) {
                return /^(0[1-9]|1[0-2])\/\d{4}$/.test(v);
            },
            message: props => `${props.value} is not a valid expiration date! Use MM/YYYY format.`
        }
    },
    postalCode: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{5,6}$/.test(v);
            },
            message: props => `${props.value} is not a valid postal code!`
        }
    },
    cvc: {
        type: String,
        required: true,
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
        required:true,
        type:String,
        unique: true,
        minlength: 3, 
        maxlength: 30,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9_]+$/.test(v); 
            },
            message: props => `${props.value} is not a valid username! Only letters, numbers, and underscores are allowed.`
        },
    },
    email: {
        type: String,
        required: true,
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
        required: true,
        minlength: 8, 
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: props => `Password is too weak! It must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.`
        }
    },
    FirstName: {
        type: String,
        required: true,
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
        required: true,
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
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number! It must be 10 digits.`
        }
    },
    CardDetails:{
        type:billingSchema,
        required:true,
    },
    Credits: {
        type: Number,
        required: true,
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
        required:true,
        default:false,
    },
    IsFreeTrial:{
        type:Boolean,
        required:true,
        default:false,
    },
    Interests:{
        type:[String],
        required:true,
    },
    LocationData:{
        type:[String],
        required:true,
    },

})

module.exports = mongoose.model("User",userSchema);