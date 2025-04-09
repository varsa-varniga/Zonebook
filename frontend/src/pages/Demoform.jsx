import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Select,
  InputLabel,
  FormControl,
  Box,
  Typography,
  Grid
} from "@mui/material";

const DemoForm = () => {
  const [country, setCountry] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    let input = event.target.value;
    if (!input.startsWith(phoneCode)) {
      input = phoneCode + input.replace(/^\+\d+/, "");
    }
    setPhoneNumber(input);
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);

    const countryPhoneCodes = {
      "United States": "+1",
      "India": "+91",
      "United Kingdom": "+44",
      "Canada": "+1",
      "South Africa": "+27"
    };

    setPhoneCode(countryPhoneCodes[selectedCountry] || "");
  };

  return (
    <Box
      sx={{
        maxWidth: 400, // Reduced width
        mx: "auto",
        p: 2, // Reduced padding
        borderRadius: 1,
        boxShadow: 2,
        bgcolor: "white"
      }}
    >
      <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 1, fontSize: 14 }}>
        Ready to grow your business?
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center", mb: 2, fontSize: 12 }}>
        Fill out the form below to see what ZoneBook can do for your company.
      </Typography>

      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <TextField fullWidth label="Email" variant="outlined" size="small" required sx= { {fontSize: 8 } }/>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label="First name" variant="outlined" size="small" required sx= { {fontSize: 8 } } />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Last name" variant="outlined" size="small" required sx= { {fontSize: 8 } }/>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label="Business name" variant="outlined" size="small" required sx= { {fontSize: 8 } }/>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Website URL" variant="outlined" size="small" required sx= { {fontSize: 8 } }/>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel sx={{ fontSize: 12 }}>Business Type*</InputLabel>
            <Select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              size="small"
              sx={{ fontSize: 12 }}
            >
             
              <MenuItem value="Retail">Retail</MenuItem>
              <MenuItem value="Tech">Tech</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth label="Current scheduling platform" variant="outlined" size="small" required sx= { {fontSize: 8 } } />
        </Grid>

        {/* Phone Number Section */}
        <Grid item xs={12}>
          <Grid container spacing={1.5} alignItems="center">
            <Grid item xs={5}>
              <FormControl fullWidth size="small">
                <InputLabel sx={{ fontSize: 12 }}>Country</InputLabel>
                <Select value={country} onChange={handleCountryChange} size="small" sx={{ fontSize: 12 }}>
                  <MenuItem value="United States">United States</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="South Africa">South Africa</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={7}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                required
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                InputProps={{ sx: { fontSize: 12 } }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
            label={<Typography sx={{ fontSize: 12 }}>I agree to receive marketing and communications.</Typography>}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            size="small"
            sx={{ bgcolor: "#5a6548", color: "white", fontSize: 12, py: 1 ,borderRadius:"18px"}}
          >
            Request a demo
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DemoForm;
