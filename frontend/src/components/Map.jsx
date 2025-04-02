import React, { useState } from "react";
import { Box, Button, Chip, Typography, Stack, useMediaQuery, useTheme } from "@mui/material";

const MapSection = () => {
  const [filters, setFilters] = useState(["Fitness", "Activities", "Amenities", "Distance"]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // For screens below 'sm' (600px)

  const handleClearFilters = () => {
    setFilters([]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        p: 4,
        gap: 4,
      }}
    >
      {/* Left Panel - Filters */}
      <Box sx={{ width: isMobile ? "100%" : "30%" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          No results found
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Adjust your location or edit your filters.
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            mb: 3,
            flexWrap: "wrap",
          }}
        >
          {filters.map((filter, index) => (
            <Chip key={index} label={filter} variant="outlined" />
          ))}
        </Stack>

        <Button
          variant="contained"
          color="success"
          onClick={handleClearFilters}
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            width: isMobile ? "100%" : "auto",
          }}
        >
          Clear filters
        </Button>
      </Box>

      {/* Right Panel - OpenStreetMap */}
      <Box
        sx={{
          width: isMobile ? "100%" : "70%",
          height: isMobile ? "300px" : "500px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        <iframe
          title="OpenStreetMap"
          width="100%"
          height="100%"
         src="https://www.openstreetmap.org/export/embed.html?bbox=-0.09,51.50,0.09,51.51&layer=mapnik"
          style={{ border: "none" }}
        ></iframe>
      </Box>
    </Box>
  );
};

export default MapSection;
