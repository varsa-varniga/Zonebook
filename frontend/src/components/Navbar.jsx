import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; // Calendar icon for "1 month free"

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#D1CCBC", boxShadow: 0, padding: "5px 0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#3A3A3A",
            letterSpacing: "1px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>ZONE</span>BOOK
        </Typography>

        {/* Menu Items */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, fontWeight: "bold" }}>
          {["Fitness classes and appointments", "Plans", "Credits", "FAQs"].map((item, index) => (
            <Typography
              key={index}
              sx={{
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
              }}
            >
              {item}
            </Typography>
          ))}

          {/* Dropdown items - No hover effect */}
          {["List my business", "Corporate wellness"].map((item, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <Typography sx={{ color: "#3A3A3A", fontSize: "14px" }}>{item}</Typography>
              <ExpandMoreIcon sx={{ color: "#3A3A3A", fontSize: "18px" }} />
            </Box>
          ))}

          {/* Login with Hover Effect */}
          <Typography
            sx={{
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
            }}
          >
            Login
          </Typography>

          {/* 1 Month Free Button */}
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

export default Navbar;
