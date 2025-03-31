
import React, { useState } from "react";
import { Box, Button, Grid, Typography, Container } from "@mui/material";

// Importing local images from assets folder
import Profile1 from "../assets/profile-1.jpeg";
import Profile2 from "../assets/profile-3.jpeg";
import Profile3 from "../assets/profile1.jpeg";

const Partner = () => {
  
  const [activeButton, setActiveButton] = useState("business");
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 4 }}>
      {/* ZoneBook Partnering Section */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        How partnering with <br />ZoneBook works
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Find out how to list your classes and appointments on ZoneBook to scale your business.
      </Typography>

      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 0,
        mb: 4,
        p: 1,
        borderRadius: 25,
        border: "1px solid #ddd",
        backgroundColor: "#fff",
        width: "fit-content",
        mx: "auto",
      }}
    >
      <Button
        onClick={() => setActiveButton("business")}
        variant={activeButton === "business" ? "contained" : "text"}
        sx={{
          borderRadius: 20,
          px: 4,
          py: 1,
          color: activeButton === "business" ? "#fff" : "#000",
          backgroundColor: activeButton === "business" ? "#4d6241" : "transparent",
          textTransform: "none",
          "&:hover": {
            backgroundColor: activeButton === "business" ? "#3e5035" : "#f0f0f0",
          },
        }}
      >
        For Business
      </Button>

      <Button
        onClick={() => setActiveButton("members")}
        variant={activeButton === "members" ? "contained" : "text"}
        sx={{
          borderRadius: 20,
          px: 4,
          py: 1,
          color: activeButton === "members" ? "#fff" : "#000",
          backgroundColor: activeButton === "members" ? "#4d6241" : "transparent",
          textTransform: "none",
          "&:hover": {
            backgroundColor: activeButton === "members" ? "#3e5035" : "#f0f0f0",
          },
        }}
      >
        For Zone Book Members
      </Button>
    </Box>
      {/* Image Cards */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
            <img
              src={Profile1}
              alt="Sign up for free"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Sign up for free
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Fill out the form to become a ClassPass partner at no cost to you.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
            <img
              src={Profile2}
              alt="Build your profile"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Build your profile
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Sync your booking system and add details of your business such as photos and descriptions of your services and amenities.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
            <img
              src={Profile3}
              alt="Increase revenue"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              Increase revenue
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Fill open spots, protect your direct member reservations and earn more with SmartTools.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Get Started Button */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: 20,
            backgroundColor: "#4d6241",
            px: 4,
            color: "#fff",
            "&:hover": {
              backgroundColor: "#3e5035",
            },
          }}
        >
          Get Started
        </Button>
      </Box>

      
    </Container>
  );
};

export default Partner;