import { useState } from "react";
import { 
  Box, Button, Typography, TextField, Select, MenuItem, 
  FormControl, InputLabel, Checkbox, FormControlLabel, Grid 
} from "@mui/material";

const Revenue = () => {
  // State for form inputs
  const [hqLocation, setHqLocation] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("USA");

  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f9f9f9",
        padding: 4,
      }}
    >
      <Box 
        sx={{
          maxWidth: 600,
          width: "100%",
          bgcolor: "white",
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        {/* Heading */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Ready to grow your business?
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Fill out the form below to see what ZoneBook can do for your company.
        </Typography>

        {/* Form */}
        <Grid container spacing={2}>
          {/* First Name & Last Name */}
          <Grid item xs={6}>
            <TextField fullWidth label="First name*" required />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Last name*" required />
          </Grid>

          {/* Email & Job Title */}
          <Grid item xs={6}>
            <TextField fullWidth label="Business email*" required />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Job title*" required />
          </Grid>

          {/* Business Phone Number */}
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                value={phoneCountry}
                onChange={(e) => setPhoneCountry(e.target.value)}
              >
                <MenuItem value="USA">United States</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="UK">United Kingdom</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth label="Phone number*" required />
          </Grid>

          {/* Company Name & Company Size */}
          <Grid item xs={6}>
            <TextField fullWidth label="Company name*" required />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth required>
              <InputLabel>Company size*</InputLabel>
              <Select
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
              >
                <MenuItem value="small">1-10 employees</MenuItem>
                <MenuItem value="medium">11-50 employees</MenuItem>
                <MenuItem value="large">50+ employees</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* HQ Location */}
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Office HQ location*</InputLabel>
              <Select
                value={hqLocation}
                onChange={(e) => setHqLocation(e.target.value)}
              >
                <MenuItem value="USA">United States</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="UK">United Kingdom</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Checkbox Agreement */}
          <Grid item xs={12}>
            <FormControlLabel 
              control={<Checkbox />} 
              label="I agree to receive marketing and other communications from ZoneBook and its group companies.*" 
            />
          </Grid>

          {/* Terms & Privacy Policy */}
          <Grid item xs={12}>
            <Typography variant="body2">
              You can unsubscribe from these communications at any time. For more information, please review our{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>Terms of Use</span> and{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>Privacy Policy</span>.
            </Typography>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              fullWidth 
              sx={{
                bgcolor: "#4F6F52",
                color: "white",
                fontSize: "1.2rem",
                textTransform: "none",
                padding: "12px",
                borderRadius: "25px",
                ":hover": { bgcolor: "#3B5740" },
              }}
            >
              Request a demo
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Revenue;
