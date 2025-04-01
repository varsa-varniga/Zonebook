const Resource = require("../models/ResourcesModel");

const resourceController = {
    addResource: async (req, res) => {
        try {
            const newResource = new Resource(req.body);
            await newResource.save();
            res.status(201).json({ message: "Resource added successfully." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getResourceById: async (req, res) => {
        try {
            const resource = await Resource.findById(req.params.id);
            if (!resource) return res.status(404).json({ error: "Resource not found" });
            res.json(resource);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    updateResource: async (req, res) => {
        try {
            const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updatedResource) return res.status(404).json({ error: "Resource not found" });
            res.json(updatedResource);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteResource: async (req, res) => {
        try {
            const deletedResource = await Resource.findByIdAndDelete(req.params.id);
            if (!deletedResource) return res.status(404).json({ error: "Resource not found" });
            res.json({ message: "Resource deleted successfully." });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    getAllResources: async (req, res) => {
        try {
            const resources = await Resource.find();
            res.json(resources);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

module.exports = resourceController;