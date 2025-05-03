const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");

const userController = {
    register: async (req, res) => {
        try {
            const {
                email, 
                password, 
                FirstName, 
                LastName, 
                Interests, 
                LocationData 
              } = req.body.data;   
              const processedEmail = email.split("@")[0];
      console.log(req.body.data)
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ 
                UserName:processedEmail,
                email:email, 
                password: hashedPassword,
                FirstName:FirstName,
                LastName:LastName,
                Interests:Interests,
                LocationData:LocationData });
            await newUser.save().then(()=> {
                res.status(201).json({ message: "User registered successfully." });
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).select("-password");
            if (!user) return res.status(404).json({ error: "User not found" });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    updateUser: async (req, res) => {
        try {
            if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select("-password");
            if (!updatedUser) return res.status(404).json({ error: "User not found" });
            res.json(updatedUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            if (!deletedUser) return res.status(404).json({ error: "User not found" });
            res.json({ message: "User deleted successfully." });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find().select("-password");
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

module.exports = userController;
