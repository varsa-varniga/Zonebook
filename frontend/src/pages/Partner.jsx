import React, { useState } from "react";
import { Box, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";

const Partner = () => {
  const [selected, setSelected] = useState("business");

  const handleToggle = (event, newSelection) => {
    if (newSelection !== null) {
      setSelected(newSelection);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: "400px",
        mx: "auto",
        mt: 4, // Adds spacing from top
      }}
    >
      <Typography variant="h4" fontWeight={400}>
        How partnering with ZoneBook works
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "12px", mt: 1 }}>
        Find out how to list your classes and appointments to scale your business
      </Typography>

      {/* Toggle Buttons - Centered Below */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <ToggleButtonGroup
          value={selected}
          exclusive
          onChange={handleToggle}
          sx={{
            borderRadius: "25px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
            p: 0.5,
            height: "40px",
          }}
        >
          <ToggleButton
            value="business"
            sx={{
              textTransform: "none",
              backgroundColor: selected === "business" ? "#5a6548" : "transparent",
              color: selected === "business" ? "white" : "black",
              borderRadius: "25px",
              fontSize: "14px",
              fontWeight: "500",
              px: 3,
              "&:hover": {
                backgroundColor: selected === "business" ? "#4c5b3e" : "#f8f8f8",
              },
              "&.Mui-selected": {
                border: "none", // Remove default outline
              },
            }}
          >
            For businesses
          </ToggleButton>

          <ToggleButton
            value="members"
            sx={{
              textTransform: "none",
              backgroundColor: selected === "members" ? "#5a6548" : "transparent",
              color: selected === "members" ? "white" : "black",
              borderRadius: "25px",
              fontSize: "14px",
              fontWeight: "500",
              px: 3,
              "&:hover": {
                backgroundColor: selected === "members" ? "#4c5b3e" : "#f8f8f8",
              },
              "&.Mui-selected": {
                border: "none", // Remove default outline
              },
            }}
          >
            For ZoneBook members
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default Partner;
