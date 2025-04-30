const express = require("express");
const userController = require("../controllers/UserController");
const router = express.Router();

router.post("/signin", userController.register);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/", userController.getAllUsers);

module.exports = router;
