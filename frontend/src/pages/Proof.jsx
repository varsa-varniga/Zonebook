import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Proof = () => {
  return (
    <Box sx={{ textAlign: "center", pb: 6 }}>
      {/* Header Section */}
      <Typography variant="h4" fontWeight="300">
        Proven to{" "}
        <span style={{ color: "#5F6F52", fontWeight: "300" }}>bring in more</span>
      </Typography>
      <Typography variant="h4" fontWeight="300" gutterBottom>
        reservations and revenue
      </Typography>

      {/* Stats Section */}
      <Box sx={{ py: 6 }}>
        <Grid container spacing={3} justifyContent="center">
          {/* First Stat */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" fontWeight="bold">
              65,000<span style={{ color: "#67714A" }}>+</span>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              fitness & wellness businesses are listed on <br />
              ZoneBook worldwide
            </Typography>
          </Grid>

          {/* Second Stat */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" fontWeight="bold">
              150 million<span style={{ color: "#67714A" }}>+</span>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ZoneBook reservations made since 2013
            </Typography>
          </Grid>

          {/* Third Stat */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" fontWeight="bold">
              150 million<span style={{ color: "#67714A" }}>+</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" >
              sent to our partners globally to date
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Proof;
