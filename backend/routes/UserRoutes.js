const express = require("express");
const userController = require("../controllers/UserController");
const { otpVerification } = require("../config/otpVerification");
const router = express.Router();

router.post("/signin", userController.register);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/", userController.getAllUsers);
router.post("/SendOtp", async(req,res) => {
    await otpVerification.sendOTP(req.body.data);
});
router.post("/VerifyOtp", async(req,res) => {
   await otpVerification.sendOTP(res.body.data);
});

module.exports = router;
