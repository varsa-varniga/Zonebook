const Company = require("../models/CompaniesModel");

const companyController = {
    addCompany: async (req, res) => {
        try {
            const newCompany = new Company(req.body);
            await newCompany.save();
            res.status(201).json({ message: "Company added successfully." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getCompanyById: async (req, res) => {
        try {
            const company = await Company.findById(req.params.id);
            if (!company) return res.status(404).json({ error: "Company not found" });
            res.json(company);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    updateCompany: async (req, res) => {
        try {
            const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updatedCompany) return res.status(404).json({ error: "Company not found" });
            res.json(updatedCompany);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteCompany: async (req, res) => {
        try {
            const deletedCompany = await Company.findByIdAndDelete(req.params.id);
            if (!deletedCompany) return res.status(404).json({ error: "Company not found" });
            res.json({ message: "Company deleted successfully." });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    getAllCompanies: async (req, res) => {
        try {
            const companies = await Company.find();
            res.json(companies);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

module.exports = companyController;