import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";

const countries = [
  { code: "+1", name: "United States" },
  { code: "+91", name: "India" },
  { code: "+44", name: "United Kingdom" },
  { code: "+86", name: "China" },
  { code: "+81", name: "Japan" },
];

const ZoneBookSignup2 = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    email: "",
    venueName: "",
    websiteUrl: "",
    country: countries[0].name,
    countryCode: countries[0].code,
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(
      (country) => country.name === e.target.value
    );
    setFormData((prev) => ({
      ...prev,
      country: selectedCountry.name,
      countryCode: selectedCountry.code,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/finalthank"); // Navigate to /finalthank
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            marginBottom: 2,
            fontWeight: 600,
            width: "100%",
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Fill your class spots and appointments for free
        </Typography>

        <Typography
          variant="h6"
          sx={{
            marginBottom: 2,
            fontWeight: 500,
            width: "100%",
            textAlign: "center",
          }}
        >
          Ready to start earning more?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: 3,
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          We just need a little more information to help you list your venue on
          ZoneBook.
        </Typography>

        <Box component="form" sx={{ width: "100%" }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="venueName"
                label="Venue Name"
                name="venueName"
                value={formData.venueName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="websiteUrl"
                label="Website URL"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Select
                fullWidth
                value={formData.country}
                onChange={handleCountryChange}
                variant="outlined"
              >
                {countries.map((country) => (
                  <MenuItem key={country.name} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }));
                }}
                InputProps={{
                  startAdornment: (
                    <Box
                      component="span"
                      sx={{
                        mr: 1,
                        color: "text.secondary",
                        userSelect: "none",
                      }}
                    >
                      {formData.countryCode}
                    </Box>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="I agree to receive marketing and other communications from ClassPass, Mindbody, and their affiliates. You can unsubscribe from these communications at any time. ClassPass processes your personal information in accordance with our Privacy Policy."
            sx={{
              marginTop: 2,
              "& .MuiFormControlLabel-label": {
                fontSize: "0.75rem",
                color: "text.secondary",
                lineHeight: 1.2,
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#4E6E58",
              "&:hover": {
                backgroundColor: "#3E5C48",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ZoneBookSignup2;
