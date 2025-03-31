import { Box } from "@mui/material";
import Schedule from "../pages/Schedule.jsx";
import CoPartner from "../pages/CoPartner.jsx";
import Software from "../pages/Software";
import Ready from "../pages/Ready.jsx";

const Browse = () => {
  return (
    <Box
      sx={{
        paddingTop: "80px", // Adjust for SubNavbar height
        overflowX: "hidden", // Prevents horizontal scroll
      }}
    >
      <Schedule />
      <CoPartner />
      <Software />
      <Ready />
    </Box>
  );
};

export default Browse;
