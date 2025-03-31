import React from "react";
import { Container, Grid, Typography, Button, Box, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import creditImage from "../assets/credit.webp";

const Credits = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const navigate = useNavigate(); // Hook to navigate

  return (
    <Container 
      maxWidth="lg" 
      sx={{ mt: { xs: 3, md: 5 }, px: { xs: 2, md: 0 }, overflow: "hidden" }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Side: Image */}
        <Grid item xs={12} md={6} textAlign="center">
          <Box
            component="img"
            src={creditImage}
            alt="Workout"
            sx={{
              width: "100%",
              maxWidth: isMobile ? "280px" : "350px",
              height: isMobile ? "40vh" : "60vh",
              borderRadius: "10px",
              display: "block",
              margin: "auto",
            }}
          />
        </Grid>

        {/* Right Side: Text & Buttons */}
        <Grid item xs={12} md={6}
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            textAlign: "center", 
          }} 
        >
          <Typography variant={isMobile ? "h5" : "h4"} fontWeight="bold">
            What are credits?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }} textAlign={"center"} >
            ClassPass credits allow you to book at thousands of studios, gyms, salons & spas.
            Use them however you like to create a personalized fitness and wellness routine.
          </Typography>
          
          <Box sx={{ mt: 3, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            {/* Navigate to UseCredit */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#5B6647",
                color: "white",
                borderRadius: "20px",
                px: 3,
                py: 1,
                mb: 1.5,
                width: isMobile ? "100%" : "auto",
                "&:hover": { bgcolor: "#49553A" },
              }}
              onClick={() => navigate("/use-credit")} // Navigate to UseCredit
            >
              See how to use credits
            </Button>

            {/* Navigate to Yogacreditcard */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#5B6647",
                color: "white",
                borderRadius: "20px",
                px: 3,
                py: 1,
                width: isMobile ? "100%" : "auto",
                "&:hover": { bgcolor: "#49553A" },
              }}
              onClick={() => navigate("/yoga-credit")} // Navigate to Yogacreditcard
            >
              See how credits work
            </Button>
          </Box>

        </Grid>
      </Grid>
    </Container>
  );
};

export default Credits;
