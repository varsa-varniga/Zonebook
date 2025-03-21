import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const plans = [
  { credits: 15, price: 35 },
  { credits: 28, price: 52 },
  { credits: 32, price: 60 },
  { credits: 37, price: 63 },
  { credits: 45, price: 70 },
];

const Plans = () => {
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      {/* Header & Try for Free Button in the Same Line */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 3 }}>
        {/* Centered Available Plans */}
        <Typography variant="h4" fontWeight="bold" position={"absolute"}>
          Available Plans
        </Typography>

        {/* Right-aligned Try for Free button */}
        <Button
          variant="contained"
          sx={{
            marginLeft: "650px",
            backgroundColor: "#4A5D3A",
            color: "white",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: "5px 12px",
            textTransform: "none",
            fontSize: "14px",
            "&:hover": { backgroundColor: "#3A4D2A" },
          }}
        >
          Try for free
        </Button>
      </Box>

      {/* Plans Grid */}
      <Grid container spacing={2} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item key={index} xs={12} sm={6} md={2.2}>
            <Paper
              sx={{
                p: 2.5,
                textAlign: "center",
                backgroundColor: "#F6F9FC",
                color: "black",
                borderRadius: "10px",
                minHeight: "90px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease",
                boxShadow: "none", 
                "&:hover": {
                  backgroundColor: "#4A5D3A",
                  color: "white",
                  transform: "scale(1.12)",
                },
                "&:hover .price-box": {
                  backgroundColor: "white",
                  color: "#4A5D3A",
                  borderColor: "white",
                  cursor: "pointer",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {plan.credits} Credits
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, fontSize: 10 }}>
                Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.
              </Typography>

              {/* Price Box (Initially Black, Changes to White on Hover) */}
              <Box
                className="price-box"
                sx={{
                  mt: 2,
                  border: "1.8px solid #5F6F52",
                  color: "black",
                  fontSize: "12px",
                  textAlign: "center",
                  fontWeight: "bold",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  padding: "4px 8px",
                  display: "flex",
                  transition: "all 0.3s ease",
                }}
              >
                ${plan.price} per month
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Features List */}
      <Box sx={{ textAlign: "left", mt: 4, display: "inline-block", fontSize: "14px" }}>
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <CheckIcon sx={{ color: "#4A5D3A", mr: 1, fontSize: 18 }} />
          Book classes & appointments worldwide
        </Typography>
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <CheckIcon sx={{ color: "#4A5D3A", mr: 1, fontSize: 18 }} />
          Cancel or change your renewal plan at any time
        </Typography>
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
          <CheckIcon sx={{ color: "#4A5D3A", mr: 1, fontSize: 18 }} />
          Invite friends to join you and score rewards for each friend who signs up
        </Typography>
      </Box>
    </Container>
  );
};

export default Plans;
