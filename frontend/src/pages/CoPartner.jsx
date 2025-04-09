import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import partner from "../assets/partners.png";

const CoPartner = () => {
  return (
    <Box sx={{ backgroundColor: "white", py: 6, px: { xs: 2, md: 6 } }}>
      <Grid container alignItems="center" spacing={4}>
        
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            <span style={{ color: "#67714A" }}>Explore </span>Zonebook booking platform integrations
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 1, mb: 3 }}>
          ZoneBook integrates with 80+ fitness & wellness booking systems so you can easily manage your schedule and maximize your revenue.
          </Typography>
          
          {/* Buttons */}
          <Stack direction="row" spacing={2}>
          <Button
              variant="contained"
              sx={{
                backgroundColor: "#5F6F52",
                color: "white",
                borderRadius: "24px",
                px: 3,
                py: 1,
                textTransform: "none",
                "&:hover": { backgroundColor: "#4B5940" },
              }}
            >
              See all integrations
            </Button>
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
             Become a Partner
            </Button>
            
            
          </Stack>
        </Grid>

        {/* Right Section (Image) */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <img src={partner} alt="Apps Integration" style={{ width: "100%", maxWidth: "500px" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoPartner;
