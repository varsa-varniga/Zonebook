import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Join from "../assets/join1.png"; 

const EarnMore = () => {
  return (
    <Box sx={{ backgroundColor: "white", py: 6, px: { xs: 2, md: 6 } }}>
      <Grid container alignItems="center" spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
          <span style={{ color: "#67714A" }}>Calculate</span>  how much more you could earn
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={1} mb={3}>
          Thousands of fitness studios, gyms, salons and spas are increasing their incremental revenue with ZoneBook.
           Use our revenue calculator to see how much more you could earn.
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
            Calculate my earnings
          </Button>
        </Grid>

        {/* Right Section (Image) */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <img src={Join} alt="Apps Integration" style={{ width: "100%", maxWidth: "500px" ,borderRadius:"15px"}} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EarnMore;
