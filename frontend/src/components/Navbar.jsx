import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#D1CCBC", boxShadow: 0, padding: "5px 0", top: 0, zIndex: 1100 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#3A3A3A", letterSpacing: "1px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#3A3A3A" }}>
            <span style={{ fontWeight: "bold" }}>ZONE</span>BOOK
          </Link>
        </Typography>

        {/* Menu Items */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, fontWeight: "bold" }}>
          <Link to="/map" style={{ textDecoration: "none" }}>
            <Typography sx={navItemStyle}>Fitness classes and appointments</Typography>
          </Link>

          <Link to="/plans" style={{ textDecoration: "none" }}>
            <Typography sx={navItemStyle}>Plans</Typography>
          </Link>

          <Link to="/credit" style={{ textDecoration: "none" }}>
            <Typography sx={navItemStyle}>Credits</Typography>
          </Link>

          <Link to="/list-business" style={{ textDecoration: "none" }}>
            <Typography sx={navItemStyle}>List my business</Typography>
          </Link>

          <Link to="/corporate-wellness" style={{ textDecoration: "none" }}>
            <Typography sx={navItemStyle}>Corporate wellness</Typography>
          </Link>

          <Link to="/faq" style={{ textDecoration: "none" }}>
            <Typography sx={navItemStyle}>FAQs</Typography>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <Typography sx={navItemStyle}>Login</Typography>
          </Link>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4D5A3A",
              color: "white",
              textTransform: "none",
              fontSize: "12px",
              padding: "5px 10px",
              borderRadius: "5px",
              "&:hover": { backgroundColor: "#3A4A2A" },
            }}
            startIcon={<CalendarMonthIcon />}
          >
            1 month free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const navItemStyle = {
  color: "#3A3A3A",
  fontSize: "14px",
  cursor: "pointer",
  position: "relative",
  "&:hover::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-3px",
    width: "100%",
    height: "2px",
    backgroundColor: "#3A3A3A",
  },
};

export default Navbar;
