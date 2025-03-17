const DemoRequest = require("../models/DemoRequest");

const submitDemoRequest = async (req, res) => {
  try {
    console.log(req.body);
    const demoRequest = new DemoRequest(req.body);
    await demoRequest.save();
    res.status(201).json({ message: "Demo request submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { submitDemoRequest };
