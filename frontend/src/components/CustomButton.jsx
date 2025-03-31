// src/components/CustomButton.jsx
import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ children, onClick, active = false }) => {
  return (
    <Button
      onClick={onClick}
      variant={active ? "contained" : "text"}
      sx={{
        borderRadius: 20,
        px: 4,
        py: 1,
        textTransform: "none",
        color: active ? "#fff" : "#000",
        backgroundColor: active ? "#4d6241" : "transparent",
        "&:hover": {
          backgroundColor: active ? "#3e5035" : "#f0f0f0",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
