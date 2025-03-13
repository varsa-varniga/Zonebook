import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Slider,
} from "@mui/material";
import Yogacreditcard from "./Yogacreditcard.jsx";
import CustomSlider from "../components/Creditlabels.jsx";

const CreditsInfo = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 700, md: 5 },
        px: { xs: 2, md: 0 },
        overflow: "hidden",
      }}
    >
      {/* Section 1: How Credits Work */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" >
            How your credits work
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
            Credits can be used to book a class or appointment. The amount of credits
            needed to book varies by reservation type, location, popularity & time.
          </Typography>
        </Grid>

        {/* Credit Range Slider */}
        <Grid item xs={12} md={6} marginTop={"65px"}>
          <CustomSlider/>
         
        </Grid>
      </Grid>

      {/* Section 2: Save with Membership */}
      <Grid container spacing={4} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" >
            Save with a <br />
             membership
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
            Exclusive member rates and in-app promotions for newly-added studios &
            first-time visits can help you save some cash.
          </Typography>
        </Grid>

        {/* Two YogaClassCard Components */}
        <Grid item xs={12} md={6}>
          <Yogacreditcard />
          <Box sx={{ mt: 2 }} />
          
        </Grid>
      </Grid>

      {/* Section 3: Bottom "Try for $0" Button */}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#5B6647",
            color: "white",
            borderRadius: "20px",
            px: 4,
            py: 1,
            "&:hover": { bgcolor: "#49553A" },
          }}
        >
          Try for $0
        </Button>
      </Box>
    </Container>
  );
};

export default CreditsInfo;
