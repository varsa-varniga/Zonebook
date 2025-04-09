const express = require("express");
const cors = require("cors");
const db = require("./config/db")

const app = express();
const PORT = 5000;

db();

// Middleware (MUST HAVE THIS!)
app.use(express.json());  // Ensures server can read JSON requests
app.use(cors());

// Routes
const demoRoutes = require("./routes/demoRoutes");
const updateRoutes = require("./routes/UpdateRoutes");
app.use("/api/demo", demoRoutes);
app.use("/api/update",updateRoutes);

const userRoutes = require('./routes/UserRoutes');
const mapRoutes = require('./routes/MapRoutes');
const companiesRoutes = require('./routes/CompaniesRoutes');
const resourcesRoutes = require('./routes/ResourcesRoutes');

app.use("/api/user",userRoutes);
app.use("/api/map",mapRoutes);
app.use("/api/companies",companiesRoutes);
app.use("/api/resources",resourcesRoutes);


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
