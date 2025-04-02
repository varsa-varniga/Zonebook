import React, { useState } from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AccountCircle from "@mui/icons-material/AccountCircle";

import CustomButton from "../components/CustomButton"; // Ensure this is styled appropriately
import Owner1 from '../assets/owner1.avif';
import Owner2 from '../assets/owner2.avif';
import Owner3 from '../assets/owner3.avif';

// Owner Data
const owners = [
  {
    id: 1,
    name: "Brandon Sutton",
    title: "Owner, Modo Yoga Seattle",
    feedback:
      "We've had success with ZoneBook bringing in unique students that help promote our studio. Since using ZoneBook, we typically see an increase of 8-13% of our monthly revenue.",
    earnings: "$122k",
    src: Owner1,
    timeOnPlatform: "4.5 years",
    totalEarnings: "$121.7k",
    category: "fitness",
  },
  {
    id: 2,
    name: "Sophia Reynolds",
    title: "Founder, Zen Wellness Spa",
    feedback:
      "ZoneBook has helped us reach clients who prioritize self-care. It's been a wonderful way to grow our business sustainably.",
    earnings: "$98k",
    src: Owner2,
    timeOnPlatform: "3 years",
    totalEarnings: "$98.2k",
    category: "wellness",
  },
  {
    id: 3,
    name: "Olivia Turner",
    title: "Owner, Luxe Beauty Studio",
    feedback:
      "Through ZoneBook, we've gained loyal clients who appreciate our premium services. Our revenue has grown significantly.",
    earnings: "$135k",
    src: Owner3,
    timeOnPlatform: "5 years",
    totalEarnings: "$134.9k",
    category: "beauty",
  },
];

// Category Data
const categories = [
  { id: "fitness", label: "Fitness Studios" },
  { id: "wellness", label: "Wellness Business" },
  { id: "beauty", label: "Beauty Businesses" },
];

const Owners = () => {
  const [activeCategory, setActiveCategory] = useState("fitness");

  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Business owners <span style={{ color: "#6b8e5e" }}>love ZoneBook</span>
        </Typography>

        {/* Category Selector */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 4,
            p: 1,
            borderRadius: 25,
            backgroundColor: "#f8f8f8",
            width: "fit-content",
            mx: "auto",
          }}
        >
          {categories.map((category) => (
            <CustomButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </CustomButton>
          ))}
        </Box>

        {/* Owner Cards */}
        <Grid container justifyContent="center">
          {owners
            .filter((owner) => owner.category === activeCategory)
            .map((owner) => (
              <Grid item xs={12} key={owner.id}>
                <Card
                  elevation={3}
                  sx={{
                    display: "flex",
                    borderRadius: 5,
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={owner.src}
                    alt={owner.name}
                    style={{ width: "300px", objectFit: "cover" }}
                  />
                  <CardContent sx={{ p: 4 }}>
                    <Typography fontWeight="bold" sx={{ display: "flex", alignItems: "center" }}>
                      <AccountCircle sx={{ mr: 1, fontSize: 24 }} /> {owner.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      fontWeight="500"
                      sx={{ mt: 1, mb: 2 }}
                    >
                      {owner.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                      "{owner.feedback}"
                    </Typography>
                    <Typography
  variant="h5"
  fontWeight="bold"
  sx={{ color: "#2e7d32", display: "flex", alignItems: "center" }}
>
  <ArrowOutwardIcon sx={{ fontSize: "1.5rem", mr: 1 }} /> {owner.earnings}
</Typography>

                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                      Made {owner.totalEarnings} in {owner.timeOnPlatform} on ZoneBook
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Owners;
