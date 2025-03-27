import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import appsImage from "../assets/apps.png"; // Ensure apps.png is in src/assets/

const Integrate = () => {
  return (
    <Box sx={{ backgroundColor: "white", py: 6, px: { xs: 2, md: 6 } }}>
      <Grid container alignItems="center" spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            <span style={{ color: "#67714A" }}>Easily</span> integrate your booking system
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={1} mb={3}>
            ZoneBook seamlessly integrates with 80+ booking systems worldwide, making it easy for you to sync your schedule and avoid overbooking.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#5F6F52",
              color: "#5F6F52",
              borderRadius: "24px",
              px: 3,
              py: 1,
              textTransform: "none",
              "&:hover": { backgroundColor: "#f5f5f5", borderColor: "#5F6F52" },
            }}
          >
            Browse integrations
          </Button>
        </Grid>

        {/* Right Section (Image) */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <img src={appsImage} alt="Apps Integration" style={{ width: "100%", maxWidth: "500px" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Integrate;
