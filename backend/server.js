const express = require("express");
const cors = require("cors");
const db = require("./config/db")

const app = express();
const PORT = 5000;

db();

// Middleware (MUST HAVE THIS!)
app.use(express.json());  // Ensures server can read JSON requests
app.use(cors());

<<<<<<< HEAD
=======
// Routes
const demoRoutes = require("./routes/demoRoutes");
const updateRoutes = require("./routes/UpdateRoutes");
app.use("/api/demo", demoRoutes);
app.use("/api/update",updateRoutes);

>>>>>>> d4d848ddb1e2ccf2d55c1f9c179a6af4b580ca9b

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
<<<<<<< HEAD

=======
>>>>>>> d4d848ddb1e2ccf2d55c1f9c179a6af4b580ca9b
