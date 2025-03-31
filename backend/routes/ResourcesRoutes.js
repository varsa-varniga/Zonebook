const express = require("express");
const resourceController = require("../controllers/resourceController");
const router = express.Router();

router.post("/add", resourceController.addResource);
router.get("/:id", resourceController.getResourceById);
router.put("/:id", resourceController.updateResource);
router.delete("/:id", resourceController.deleteResource);
router.get("/", resourceController.getAllResources);

module.exports = router;