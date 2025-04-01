const Map = require("../models/MapModel");

const mapController = {
    addPlace: async (req, res) => {
        try {
            const newPlace = new Map(req.body);
            await newPlace.save();
            res.status(201).json({ message: "Place added successfully." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getPlaceById: async (req, res) => {
        try {
            const place = await Map.findById(req.params.id);
            if (!place) return res.status(404).json({ error: "Place not found" });
            res.json(place);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    updatePlace: async (req, res) => {
        try {
            const updatedPlace = await Map.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updatedPlace) return res.status(404).json({ error: "Place not found" });
            res.json(updatedPlace);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deletePlace: async (req, res) => {
        try {
            const deletedPlace = await Map.findByIdAndDelete(req.params.id);
            if (!deletedPlace) return res.status(404).json({ error: "Place not found" });
            res.json({ message: "Place deleted successfully." });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    getAllPlaces: async (req, res) => {
        try {
            const places = await Map.find();
            res.json(places);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

module.exports = mapController;