const UpdateModel = require('../models/UpdateModel');

const handleFormSubmission = async (req, res) => {
    try {
        const { firstName, lastName, businessEmail, companyName, consent } = req.body;

        // Create a new record
        const newRequest = new UpdateModel({
            firstName,
            lastName,
            businessEmail,
            companyName,
            consent,
        });

        await newRequest.save();

        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Server error, please try again later.' });
    }
};

module.exports = { handleFormSubmission };
