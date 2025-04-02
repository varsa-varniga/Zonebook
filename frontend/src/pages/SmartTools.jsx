import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import tool1 from "../assets/tool1.png";
import tool2 from "../assets/tool2.png";

const SmartTools = () => {
  return (
    <Box sx={{ py: 6, textAlign: "center", px: 2}}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
        SmartTools <span style={{ color: "#5a6548" }}>101</span>
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "black", maxWidth: "600px", mx: "auto", mt: 1 }}>
        SmartTools, an intelligent spot management system, uses real-time data to predict empty spots and adjust rates to fill them.
      </Typography>

      <Grid 
        container 
        spacing={3} 
        justifyContent="center" 
        alignItems="center" 
        sx={{ mt: 4 }}
      >
        {/* SmartSpot Section */}
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Card elevation={0} sx={{ borderRadius: "15px", maxWidth: 380, mx: "auto", p: 2 }}>
            <CardMedia 
              component="img" 
              src={tool1} 
              alt="SmartSpot" 
              sx={{ borderRadius: "10px", maxWidth: "100%", height: "auto" }} 
            />
          </Card>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold", color: "black" }}>
            Smart<span style={{ color: "#5a6548" }}>Spot</span>
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: "350px", mx: "auto", color: "black", textAlign: "center", mt: 1 }}>
            By analyzing historic booking patterns, SmartSpot only lists spots that you’re less likely to fill on your own, so you can protect your direct clientele.
          </Typography>
        </Grid>

        {/* SmartRate Section */}
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Card elevation={0} sx={{ borderRadius: "15px", maxWidth: 380, mx: "auto", p: 2 }}>
            <CardMedia 
              component="img" 
              src={tool2} 
              alt="SmartRate" 
              sx={{ borderRadius: "10px", maxWidth: "100%", height: "auto" }} 
            />
          </Card>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold", color: "black" }}>
            Smart<span style={{ color: "#5a6548" }}>Rate</span>
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: "350px", mx: "auto", color: "black", textAlign: "center", mt: 1 }}>
            SmartRate dynamically prices your available spots based on factors like popularity, location, and time to help you optimize your revenue.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SmartTools;
