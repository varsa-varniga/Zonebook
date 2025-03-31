const mongoose = require('mongoose');

const MapSchema = new mongoose.Schema({
    PlaceName: {
        type: String,
        required: true,
        trim: true,
    },
    ActivityTypes: {
        type: String, 
        required: true,
        enum: ["Fitness", "Activities", "Amenities", "Distance"],
    },
    lon: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return v >= -180 && v <= 180; 
            },
            message: props => `${props.value} is not a valid longitude! Must be between -180 and 180.`,
        },
    },
    lat: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return v >= -90 && v <= 90; 
            },
            message: props => `${props.value} is not a valid latitude! Must be between -90 and 90.`,
        },
    },
});

module.exports = mongoose.model("Map", MapSchema);
