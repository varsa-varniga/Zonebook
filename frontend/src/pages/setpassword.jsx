import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Container,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PasswordSetupScreen = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleContinue = () => {
    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain 8 characters and include a symbol");
    } else {
      // Handle successful password setup
      console.log("Password set successfully");

      // Store password in localStorage or state management if needed
      localStorage.setItem("userPassword", password);

      // Navigate to the NameForm component
      navigate("/setname");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ mb: 4, textAlign: "left", alignSelf: "flex-start" }}>
            <Typography variant="body2" color="text.secondary">
              1 of 5
            </Typography>
          </Box>

          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 4,
              fontWeight: "bold",
              color: "#4a4a4a",
              textAlign: "center",
            }}
          >
            SET YOUR PASSWORD
          </Typography>

          <TextField
            fullWidth
            placeholder="Choose your password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            error={!!error}
            helperText={error}
            sx={{ mb: 3 }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, textAlign: "center" }}
          >
            Set a password that must contain 8 characters and, include a symbol
          </Typography>

          <Button
            fullWidth
            variant="contained"
            onClick={handleContinue}
            sx={{
              mb: 3,
              bgcolor: "#5f7161",
              "&:hover": {
                bgcolor: "#4d5d4e",
              },
              borderRadius: "20px",
              textTransform: "none",
              py: 1.5,
            }}
          >
            Continue
          </Button>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Link
              href="#"
              underline="hover"
              color="text.secondary"
              variant="body2"
            >
              Terms of Use
            </Link>
            <Typography variant="body2" color="text.secondary">
              and
            </Typography>
            <Link
              href="#"
              underline="hover"
              color="text.secondary"
              variant="body2"
            >
              Privacy Policy
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default PasswordSetupScreen;
