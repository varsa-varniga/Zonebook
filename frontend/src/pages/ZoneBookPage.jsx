import { Box, Typography } from "@mui/material";
import Revenue from "../pages/Revenue";
import activity from "../assets/activity.png";

const ZoneBookPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "white",
        padding: 4,
      }}
    >
      {/* Left Section - Heading & Description */}
      <Box sx={{ flex: 1, maxWidth: 600, textAlign: "left", p: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          <span style={{ color: "#4F6F52" }}>Increase</span> your revenue for free with ZoneBook
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "gray" }}>
          Give your team access to the world's largest collection of top-rated gyms, fitness studios, 
          and wellness businesses with the ZoneBook Corporate Wellness Program.
        </Typography>
      </Box>

      {/* Right Section - Form & Images */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ maxWidth: 500, width: "100%" }}>
          <Revenue />
        </Box>

        {/* Image Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            mt: 3,
          }}
        >
          <img
            src={activity}
            alt="Gym Image 1"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <img
            src="/assets/activity.png"
            alt="Gym Image 2"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <img
            src="/assets/image3.jpg"
            alt="Gym Image 3"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <img
            src="/assets/image4.jpg"
            alt="Gym Image 4"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ZoneBookPage;
