import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  MenuItem,
  Select,
  FormControl,
  Grid,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PhoneNumberForm = () => {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Country code:", countryCode);
    console.log("Phone number:", phoneNumber);

    // Save phone data to session storage or state management if needed
    const phoneData = {
      countryCode,
      phoneNumber,
    };
    sessionStorage.setItem("phoneData", JSON.stringify(phoneData));

    // Navigate to verification page
    navigate("/setotp");
  };

  // Common country codes
  const countryCodes = [
    { value: "+1", label: "+1 (US/Canada)" },
    { value: "+44", label: "+44 (UK)" },
    { value: "+61", label: "+61 (Australia)" },
    { value: "+33", label: "+33 (France)" },
    { value: "+49", label: "+49 (Germany)" },
    { value: "+81", label: "+81 (Japan)" },
    { value: "+86", label: "+86 (China)" },
    { value: "+91", label: "+91 (India)" },
  ];

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          fontWeight="bold"
          sx={{
            mb: 4,
            color: "#4A4A4A",
            textTransform: "uppercase",
          }}
        >
          What's your phone number
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <FormControl sx={{ width: "30%" }}>
            <Select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              displayEmpty
              sx={{ height: "40px" }}
            >
              {countryCodes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            required
            fullWidth
            id="phone"
            placeholder="Phone Number"
            variant="outlined"
            value={phoneNumber}
            onChange={handlePhoneChange}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "40px",
                "& fieldset": {
                  borderColor: "#ccc",
                },
              },
            }}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{ color: "#666", textAlign: "center", mb: 3 }}
        >
          By providing your mobile number you agree to send you text messages
          about reservation changes. Standard messages and data rates may apply.
          Contact us or reply stop to the text to stop out.
        </Typography>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#5F6F52",
            color: "white",
            textTransform: "none",
            py: 1.5,
            "&:hover": {
              bgcolor: "#4D5C40",
            },
          }}
        >
          Continue
        </Button>

        <Grid container spacing={1} justifyContent="center" sx={{ mt: 1 }}>
          <Grid item>
            <Link
              href="#"
              variant="body2"
              sx={{ color: "#666", fontSize: "0.75rem" }}
            >
              Terms of Use
            </Link>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              sx={{ color: "#666", fontSize: "0.75rem" }}
            >
              and
            </Typography>
          </Grid>
          <Grid item>
            <Link
              href="#"
              variant="body2"
              sx={{ color: "#666", fontSize: "0.75rem" }}
            >
              Privacy Policy
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PhoneNumberForm;
