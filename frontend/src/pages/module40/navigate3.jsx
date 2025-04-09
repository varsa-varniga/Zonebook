import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Thank = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#fff" }}>
      {/* Navbar */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}
      >
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box />
            <Box sx={{ display: "flex", gap: "30px" }}>
              <Button
                sx={{ color: "#333", fontWeight: 500, textTransform: "none" }}
              >
                How it works
              </Button>
              <Button
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  textTransform: "none",
                  borderBottom: "3px solid #333",
                  paddingBottom: "5px",
                }}
              >
                Calculate my earnings
              </Button>
              <Button
                sx={{ color: "#333", fontWeight: 500, textTransform: "none" }}
              >
                Browse Integration
              </Button>
              <Button
                sx={{ color: "#333", fontWeight: 500, textTransform: "none" }}
              >
                Resource
              </Button>
              <Button
                sx={{ color: "#333", fontWeight: 500, textTransform: "none" }}
              >
                Blog
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          Thanks!
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: "700px" }}>
          A team member will reach out within 2 business days with more
          information.
        </Typography>

        {/* Back Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/")} // ✅ Navigate to home
          sx={{
            backgroundColor: "#4d6241",
            color: "#fff",
            padding: "14px 35px",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Back to Home page
        </Button>
      </Box>
    </Box>
  );
};

export default Thank;
