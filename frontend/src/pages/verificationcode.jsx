import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Link,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const VerificationCodeForm = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate(); // Hook to handle navigation

  // Set up input refs
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 4);
  }, []);

  const handleCodeChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto focus to next input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendCode = () => {
    // Handle resend code logic
    console.log("Resending code...");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process verification code
    const verificationCode = code.join("");
    console.log("Verification code submitted:", verificationCode);

    // Navigate to the next component
    navigate("/setpayment"); // Replace "/next-page" with your desired route
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
        {/* Page indicator */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            alignSelf: "flex-start",
            mb: 4,
            fontSize: "0.9rem",
          }}
        >
          4 of 5
        </Typography>

        {/* Main heading - reduced size */}
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mb: 1.5,
            fontWeight: "bold",
            color: "#3E4651",
            textAlign: "center",
          }}
        >
          Enter the verification code sent to: 0123456789
        </Typography>

        {/* Verification code inputs */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ mb: 2, mt: 2 }}
        >
          {[0, 1, 2, 3].map((index) => (
            <Grid item key={index}>
              <TextField
                inputRef={(el) => (inputRefs.current[index] = el)}
                value={code[index]}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                inputProps={{
                  maxLength: 1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  style: { textAlign: "center", fontSize: "1.5rem" },
                }}
                sx={{
                  width: "60px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#999",
                    },
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Resend code button */}
        <Button
          onClick={handleResendCode}
          sx={{
            mb: 4,
            textTransform: "none",
            color: "#2196F3",
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
            },
          }}
        >
          Resend Code
        </Button>

        {/* Terms text */}
        <Typography
          variant="body2"
          align="center"
          sx={{
            mb: 3,
            color: "#666",
            maxWidth: "90%",
          }}
        >
          By providing your mobile number you agree to send you text messages
          about reservation changes. Satandard messages and data rates may
          apply. Contact us or reply stop to the text to stop out.
        </Typography>

        {/* Continue button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            mb: 2,
            textTransform: "none",
            bgcolor: "#5E6E55",
            "&:hover": {
              bgcolor: "#4D5A46",
            },
            borderRadius: 16,
            maxWidth: "80%",
          }}
        >
          Continue
        </Button>

        {/* Footer links */}
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
            Terms of Use
          </Link>
          <Typography color="text.secondary" sx={{ mr: 1 }}>
            and
          </Typography>
          <Link href="#" underline="hover" color="text.secondary">
            Privacy Policy
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default VerificationCodeForm;
