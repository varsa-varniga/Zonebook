import { Box, Typography, Link, Grid } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { FaSpotify } from "react-icons/fa";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#D1CCBC", color: "#3A3A3A", padding: "40px 0" }}>
      <Grid container spacing={4} sx={{ maxWidth: "1100px", margin: "auto", textAlign: "left" }}>
        
        {/* Company */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography fontWeight="bold">Company</Typography>
          {["About us", "Why studio fitness", "Gifts", "Careers", "Press", "How it works", "Corporate Memberships"].map((item, index) => (
            <Typography key={index} sx={{ fontSize: "14px", marginTop: "8px", cursor: "pointer" }}>
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Support */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography fontWeight="bold">Support</Typography>
          <Typography sx={{ fontSize: "14px", marginTop: "8px", cursor: "pointer" }}>Contact Us</Typography>
          <Typography sx={{ fontSize: "14px", marginTop: "8px", cursor: "pointer" }}>Help Center</Typography>
          <Typography fontWeight="bold" sx={{ marginTop: "20px" }}>Language</Typography>
          <Typography sx={{ fontSize: "14px", marginTop: "8px", cursor: "pointer" }}>English (United States) ▼</Typography>
        </Grid>

        {/* Partners */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography fontWeight="bold">Partners</Typography>
          {["Become a Partner", "Integration API Docs", "After Class Blog"].map((item, index) => (
            <Typography key={index} sx={{ fontSize: "14px", marginTop: "8px", cursor: "pointer" }}>
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Community */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography fontWeight="bold">Community</Typography>
          {["Refer a Friend", "Locations", "Blog", "Top 10 Lists", "Activities", "Popular Studios"].map((item, index) => (
            <Typography key={index} sx={{ fontSize: "14px", marginTop: "8px", cursor: "pointer" }}>
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Bottom Section: "Enjoy fitness on the go" + Social Icons + Terms & Privacy */}
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "30px",
        padding: "0 20px",
        width:"800px"
      }}>
        
        {/* Left: Enjoy Fitness on the Go */}
        <Box>
          <Typography fontWeight="bold">Enjoy fitness on the go</Typography>
          <Box sx={{ display: "flex", gap: 1, marginTop: "10px" }}>
            <AppleIcon sx={{ fontSize: 40, cursor: "pointer" }} />
            <AndroidIcon sx={{ fontSize: 40, cursor: "pointer" }} />
          </Box>
        </Box>

        {/* Right: Social Icons & Terms/Privacy (Right-aligned) */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1 }}>
          
          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <FacebookIcon sx={{ fontSize: 24, cursor: "pointer" }} />
            <TwitterIcon sx={{ fontSize: 24, cursor: "pointer" }} />
            <InstagramIcon sx={{ fontSize: 24, cursor: "pointer" }} />
            <PinterestIcon sx={{ fontSize: 24, cursor: "pointer" }} />
            <FaSpotify size={30} color="#1DB954" />
          </Box>

          {/* Terms & Privacy (Right-Aligned) */}
          <Box sx={{ fontSize: "12px", display: "flex", gap: 2, flexWrap: "wrap", textAlign: "right" }}>
            <Link href="#" sx={{ textDecoration: "none", color: "#3A3A3A" }}>Terms of Use</Link>
            <Link href="#" sx={{ textDecoration: "none", color: "#3A3A3A" }}>Privacy Policy</Link>
            <Link href="#" sx={{ textDecoration: "none", color: "#3A3A3A" }}>Cookies & Ads</Link>
            <Link href="#" sx={{ textDecoration: "none", color: "#3A3A3A" }}>Accessibility</Link>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
