const express = require("express");
const companyController = require("../controllers/CompaniesController");
const router = express.Router();

router.post("/add", companyController.addCompany);
router.get("/:id", companyController.getCompanyById);
router.put("/:id", companyController.updateCompany);
router.delete("/:id", companyController.deleteCompany);
router.get("/", companyController.getAllCompanies);

module.exports = router;
