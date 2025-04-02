const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200
    },
    type: {
        type: String,
        required: true,
        enum: ["E-book", "Case Study", "Video"]
    },
    topic: {
        type: String,
        required: true,
        enum: [
            "Boxing", "Business owner resources", "Crossfit", "Cycling",
            "Food and beverage", "Gym", "Marketing", "Running",
            "Smartmate", "Smartspot", "Social media", "Spa", "Yoga"
        ] 
    },
    imageUrl: {
        type: String,
        required: false, 
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true,
        maxlength: 1000
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Resource", ResourceSchema);
