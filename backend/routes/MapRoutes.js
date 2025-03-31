const express = require("express");
const mapController = require("../controllers/MapController");
const router = express.Router();

router.post("/add", mapController.addPlace);
router.get("/:id", mapController.getPlaceById);
router.put("/:id", mapController.updatePlace);
router.delete("/:id", mapController.deletePlace);
router.get("/", mapController.getAllPlaces);

module.exports = router;
