import { useState } from "react";

import {Grid, TextField, Button, MenuItem, Checkbox, FormControlLabel, Select, InputLabel, FormControl, Box, Typography } from "@mui/material";


const Revenue = () => {
 

  return (
    <>
   

<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    mb: 4, // Corrected from "4" to 4
    height: "40vh",
    maxWidth: "550px", // Increased for better layout
    margin: "auto", // Centering horizontally
  }}
>
  <Typography variant="h4" sx={{ fontWeight: 400 }}> 
    Learn more about how ZoneBook <br />
    can <span style={{ color: "#5a6548" }}>grow</span> your business
  </Typography>
  <Typography variant="body2" sx={{ mt: 1 }} > 
    List your fitness studio, gym, salon, or spa on ZoneBook for free to start earning more today.
  </Typography>
</Box>






    </>
  );
};

export default Revenue;
