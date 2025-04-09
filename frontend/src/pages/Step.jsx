import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import ScheduleImage from "../assets/step1.png"; 
import GraphImage from "../assets/step2.png"; 
import RevenueImage from "../assets/step3.png"; 

const Step = () => {
  return (
    <Box sx={{ textAlign: "center", p: 4 }}>
      {/* Header Section */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        How it works
      </Typography>
      <Typography
  variant="body1"
  color="textSecondary"
  mb={4}
  width="800px"
  align="center"
  sx={{ mx: "auto" }}
>
  ZoneBook uses SmartTools, an intelligent spot management system, to dynamically price classes and appointments and maximize your revenue.
</Typography>


      {/* Steps Grid */}
      <Grid container spacing={3} justifyContent="center">
        {/* Step 1 - Appointment Schedule */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 2, p: 2 }}>
            <CardContent>
              <img src={ScheduleImage} alt="Appointment Schedule" style={{ width: "100%", borderRadius: "8px" }} />
              <Typography variant="h6" mt={2} align="left" color="#5F6F52">STEP 1</Typography>
              <Typography variant="body2" color="textSecondary"  sx={{textAlign:"justify"}}>
                Sync your schedule or add classes and appointments for users to book.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Step 2 - Smart Pricing Graph */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 2, p: 2 }}>
            <CardContent>
              <img src={GraphImage} alt="Smart Pricing Graph" style={{ width: "100%", borderRadius: "8px" }} />
              <Typography variant="h6" mt={2}align="left" color="#5F6F52">STEP 2</Typography>
              <Typography variant="body2" color="textSecondary"  sx={{textAlign:"justify"}}>
                Use SmartTools to fill spots that would typically go unbooked.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Step 3 - Total Revenue */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 2, p: 2 }}>
            <CardContent>
              <img src={RevenueImage} alt="Total Revenue" style={{ width: "100%", borderRadius: "8px" }} />
              <Typography variant="h6" mt={2} align="left" color="#5F6F52">STEP 3</Typography>
              <Typography variant="body2" color="textSecondary" sx={{textAlign:"justify"}}>
                Track your reservations and revenue on your personalized dashboard.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step;
