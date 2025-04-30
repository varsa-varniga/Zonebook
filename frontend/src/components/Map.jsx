import React, { useState } from "react";
import { Box, Button, Chip, Typography, Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import L from "leaflet";

const DEFAULT_POSITION = [51.505, -0.09]; // Default: London

const MapUpdater = ({ position }) => {
  const map = useMap();
  map.setView(position, 13);
  return null;
};

const MapSection = () => {
  const [filters, setFilters] = useState(["Fitness", "Activities", "Amenities", "Distance"]);
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [searchQuery, setSearchQuery] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClearFilters = () => {
    setFilters([]);
  };

  // Handle search input
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    const provider = new OpenStreetMapProvider();
    const results = await provider.search({ query: searchQuery });

    if (results.length > 0) {
      const { x, y } = results[0]; // Extract longitude and latitude
      setPosition([y, x]); // Update map position
    } else {
      alert("Location not found. Try a different search term.");
    }
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

        <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: "wrap" }}>
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

      {/* Right Panel */}
      <Box sx={{ width: isMobile ? "100%" : "70%", display: "flex", flexDirection: "column", gap: 2, }}>
        {/* Search Box */}
        <TextField
  fullWidth
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
  sx={{
    position: 'absolute',
    zIndex: 10000,
    bgcolor: 'white',
    top: 6,
    left: 180,
    width: '20%',
    borderRadius: 70,
    '& .MuiOutlinedInput-root': {
      borderRadius: 70,
      '& fieldset': {
        border: 'none', // removes the border
      },
    },
  }}
  variant="outlined"
/>


        {/* Map Container */}
        <Box
          sx={{
            height: isMobile ? "300px" : "500px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapUpdater position={position} />
            <Marker position={position} />
          </MapContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default MapSection;