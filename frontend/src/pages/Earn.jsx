import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import spa from "../assets/spa.jpg";
import fitness from "../assets/fitness.jpg";

const businessTypes = [
  { title: "Fitness", id: "fitness", image: fitness },
  { title: "Beauty, spa and recovery", id: "beauty", image: spa },
];

const Earn = () => {
  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleCardClick = (id) => {
    if (id === "fitness") {
      navigate("/secondnavbar"); // ✅ navigate to route
    }
  };

  return (
    <Container maxWidth="md" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ maxWidth: "700px", margin: "0 auto", py: "30px" }}
        align="center"
      >
        Discover how much you could earn with ZoneBook
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {businessTypes.map((business) => (
          <Grid item key={business.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: 2,
                borderRadius: 3,
                boxShadow: 3,
                width: 250,
                height: 250,
              }}
            >
              <CardActionArea
                style={{ height: "100%" }}
                onClick={() => handleCardClick(business.id)} // ✅ handle click
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={business.image}
                  alt={business.title}
                />
                <CardContent>
                  <Typography variant="h6">{business.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body1" color="black" style={{ marginTop: 40 }}>
        Partnering with ZoneBook is 100% free. List your available classes and
        appointments on our app for our members to book and get paid for every
        reservation.
      </Typography>

      <Typography variant="h6" style={{ marginTop: 20, fontWeight: "600" }}>
        Select your business type:
      </Typography>
    </Container>
  );
};

export default Earn;
