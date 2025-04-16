import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Link,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NameForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can validate the form here if needed
    if (firstName && lastName) {
      // Navigate to the next component/page
      navigate("/setnumber"); // Change this path to your actual next route
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Page indicator at the top */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            alignSelf: "flex-start",
            mb: 4,
            fontSize: "0.9rem",
          }}
        >
          2 of 5
        </Typography>

        <Typography
          component="h1"
          variant="h3"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: "#3E4651",
            textAlign: "center",
          }}
        >
          WHAT'S YOUR NAME
        </Typography>

        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{ mb: 2 }}
              required
            />

            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{ mb: 3 }}
              required
            />

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                py: 1.5,
                textTransform: "none",
                bgcolor: "#5E6E55",
                "&:hover": {
                  bgcolor: "#4D5A46",
                },
                borderRadius: 2,
              }}
            >
              Continue
            </Button>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              fontSize: "0.8rem",
            }}
          >
            <Link
              href="#"
              underline="hover"
              color="text.secondary"
              sx={{ mr: 1 }}
            >
              Terms of Use and Privacy Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default NameForm;
