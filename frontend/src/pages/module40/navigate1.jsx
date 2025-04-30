import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signupfree = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ fontSize: "42px", lineHeight: "1.2", mb: 3 }}
        >
          You could be earning an additional
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ fontSize: "42px", lineHeight: "1.2", mb: 3 }}
        >
          ARS115 - ARS369 per month by listing your
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ fontSize: "42px", lineHeight: "1.2", mb: 9 }}
        >
          Strength Training business on ZoneBook*
        </Typography>

        <Typography
          variant="h6"
          sx={{ mb: 7, maxWidth: "600px", fontSize: "18px", fontWeight: "500" }}
        >
          Partnering with ZoneBook is fast, easy and best of all — FREE.
        </Typography>

        {/* Sign Up Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4d6241",
            color: "#fff",
            padding: "18px 40px",
            borderRadius: "30px",
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "none",
            mb: 7,
            minWidth: "400px",
            height: "50px",
          }}
          onClick={() => navigate("/setappointment")}
        >
          Sign Up for free
        </Button>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            maxWidth: "900px",
            fontSize: "13px",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          This amount is an estimate based on several variables (such as average
          payouts, including tax, to businesses in your genre) <br />
          and assumptions (such as the number of spots made available to
          ZoneBook) <br />
          We cannot predict your actual earnings, which will vary with your
          pricing, class format, geography, class fill, quality, studio density,
          and other factors.
        </Typography>
      </Box>
    </Box>
  );
};

export default Signupfree;
