import React, { useState } from "react";
import { Box, Slider, Typography } from "@mui/material";

const creditLabels = [
  "Gym time",
  "Yoga",
  "Bootcamp",
  "Nails",
  "Pilates",
  "Massage",
];

const CustomSlider = () => {
  const [value, setValue] = useState(20);

  return (
    <Box sx={{ width: "100%", textAlign: "center", mt: 4 }}>
      {/* Labels above the slider */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        {creditLabels.map((label, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{ transform: "rotate(-20deg)", color: "gray" }}
          >
            {label}
          </Typography>
        ))}
      </Box>

      {/* Slider */}
      <Slider
        value={value}
        step={10}
        min={0}
        max={100}
        onChange={(e, newValue) => setValue(newValue)}
        sx={{
          color: "#1976d2",
          "& .MuiSlider-thumb": {
            width: 18,
            height: 18,
          },
        }}
      />

      {/* Labels below the slider */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Typography variant="body2" color="primary">
          Fewer credits
        </Typography>
        <Typography variant="body2" color="primary">
          More credits
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomSlider;
