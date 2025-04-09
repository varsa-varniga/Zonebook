import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  InputLabel,
  Link,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Hero from "../assets/heropic.jpg";

const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${Hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <CssBaseline />
      <Container
        maxWidth="xs"
        sx={{
         
        width:400,
          p: 2,
          borderRadius: 1,
          boxShadow: 0,
          position: "absolute",
          left: "3%", // Further left
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Typography 
  variant="h5"  // Bigger than subtitle1
  fontWeight="bold" 
  textAlign="center"
  sx={{ fontSize: "1.5rem" }} // Explicitly set bigger font size
>
  Welcome back
</Typography>


        {/* Apple Login */}
        <Button
          fullWidth
          variant="contained"
          startIcon={<AppleIcon />}
          sx={{
            backgroundColor: "black",
            color: "white",
            mb: 1,
            py: 0.5, // Smaller height
            fontSize: "0.75rem", // Smaller text
          }}
        >
          Sign in with Apple
        </Button>

        {/* Google Login */}
        <Button
          fullWidth
          variant="contained"
          startIcon={<GoogleIcon />}
          sx={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid #ccc",
            mb: 1.5,
            py: 0.5, // Smaller height
            fontSize: "0.75rem", // Smaller text
          }}
        >
          Sign in with Google
        </Button>

        <Typography variant="body2" sx={{ textAlign: "center", fontSize: "0.7rem" }}>
          or
        </Typography>

        {/* Email & Password Fields */}
        <Box sx={{ textAlign: "left" }}>
          <InputLabel sx={{ fontSize: "0.7rem", mb: 0.5 }}>Email address</InputLabel>
          <TextField fullWidth size="small" margin="dense" sx={{ fontSize: "0.7rem" }} />

          <InputLabel sx={{ fontSize: "0.7rem", mt: 1, mb: 0.5 }}>Password</InputLabel>
          <TextField fullWidth type="password" size="small" margin="dense" sx={{ fontSize: "0.7rem" }} />
        </Box>

        {/* Login Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#566B45",
            color: "white",
            mt: 1.5,
            py: 0.5, // Smaller height
            fontSize: "0.75rem", // Smaller text
          }}
        >
          Login
        </Button>

        {/* Forgot Password & Other Links */}
        <Typography variant="body2" sx={{ mt: 1.5, color: "gray", fontSize: "0.7rem", textAlign: "center" }}>
          Forgot your password?
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, color: "black", fontSize: "0.7rem", textAlign: "center" }}>
          Having trouble? Contact{" "}
          <Link href="#" sx={{ color: "green", fontWeight: "bold", fontSize: "0.7rem" }}>
            Support
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, color: "gray", fontSize: "0.7rem", textAlign: "center" }}>
          Partner Dashboard login
        </Typography>
      </Container>
    </Box>
  );
};

export default Login;
