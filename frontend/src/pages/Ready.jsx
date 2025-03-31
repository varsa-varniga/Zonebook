import React from "react";
import { Button, Typography, Box } from "@mui/material";


const Ready = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh", // Centers vertically
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "300",
          mb: 1, // Margin bottom for spacing
        }}
      >
       Ready to earn more?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 3, // More space before the button
        }}
      >
      
List your business on ZoneBook for free to increase your revenue today.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#5a6548", // Similar to the button color in the image
          color: "white",
          padding: "10px 30px",
          borderRadius: "50px", // Rounded edges
          fontSize: "16px",
          textTransform: "none", // Prevent uppercase text
          "&:hover": { backgroundColor: "#4d573e" }, // Slightly darker shade on hover
        }}
      >
        Become a Partner
      </Button>
    </Box>
  );
};

export default Ready;
