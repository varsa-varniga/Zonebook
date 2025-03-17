const express = require("express");
const router = express.Router();
const demoController = require("../controllers/demoController")

// POST: Store multiple demo entries
router.post("/demo", demoController.submitDemoRequest);

module.exports = router;
