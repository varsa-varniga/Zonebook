import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, Pinterest } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "#f5f5f5", p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Company</Typography>
          {["About us", "Why studio fitness", "Gifts", "Careers", "Press", "How it works", "Corporate Memberships"].map((text) => (
            <Link key={text} href="#" underline="none" color="textPrimary" display="block" sx={{ mb: 1 }}>
              {text}
            </Link>
          ))}
        </Grid>

        {/* Support Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Support</Typography>
          {["Contact Us", "Help Center"].map((text) => (
            <Link key={text} href="#" underline="none" color="textPrimary" display="block" sx={{ mb: 1 }}>
              {text}
            </Link>
          ))}
          <Typography variant="body2" sx={{ mt: 1 }}>Language: English (United States)</Typography>
        </Grid>

        {/* Partners Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Partners</Typography>
          {["Become a Partner", "Integration API Docs", "After Class Blog"].map((text) => (
            <Link key={text} href="#" underline="none" color="textPrimary" display="block" sx={{ mb: 1 }}>
              {text}
            </Link>
          ))}
        </Grid>

        {/* Community Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Community</Typography>
          {["Refer a Friend", "Locations", "Blog", "Top 10 Lists", "Activities", "Popular Studios"].map((text) => (
            <Link key={text} href="#" underline="none" color="textPrimary" display="block" sx={{ mb: 1 }}>
              {text}
            </Link>
          ))}
        </Grid>
      </Grid>

      {/* Social Icons */}
      <Box sx={{ textAlign: "right", mt: 3 ,justifyContent:"space-evenly"}}>
        <IconButton href="#" color="inherit"><Facebook /></IconButton>
        <IconButton href="#" color="inherit"><Twitter /></IconButton>
        <IconButton href="#" color="inherit"><Instagram /></IconButton>
        <IconButton href="#" color="inherit"><Pinterest /></IconButton>
      </Box>

      {/* Legal Links */}
      <Typography variant="body2" color="textSecondary" align="right" sx={{ mt: 2 }}>
        Terms of Use | Privacy Policy | Cookies & Ads | Accessibility
      </Typography>
    </Box>
  );
};

export default Footer;
