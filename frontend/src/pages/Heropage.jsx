import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Hero from "../assets/heropic.jpg";

const HeroContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "left",
  height: "100vh",
  backgroundImage: `url(${Hero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#333",
  padding: "40px 60px",
  gap: "15px",
});

const ButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "15px",
  marginTop: "10px",
});

const StyledButton = styled(Button)({
  backgroundColor: "#4b6b48",
  color: "white",
  padding: "10px 20px",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#3a5a38",
  },
});

const HeroPage = () => {
  return (
    <HeroContainer>
    <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "Fredoka, sans-serif" }}>
        ONE APP
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Endless possibilities. Fitness, wellness, and beauty — all in one place!
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px", marginBottom: "20px", lineHeight: "1.5" }}>
        Time is running out! <br />
        Kick off the new year with unlimited access to thousands of <br />
         fitness
        studios and gyms worldwide. <br />
         Don't miss your chance to sweat, move, and crush your goals!🔥🎉
      </Typography>
      <ButtonContainer>
        <StyledButton variant="contained" fontWeight="bold">Get 1 month free</StyledButton>
        <Button variant="text" sx={{ color: "black", fontSize: "14px" ,fontWeight:"bold"}}>
          Learn about Classpass
        </Button>
      </ButtonContainer>
      <Button variant="text" sx={{ color: "#b76e79", textDecoration: "underline", fontSize: "14px", marginTop: "10px", alignSelf: "flex-start",fontWeight:"400" }}>
        Browse classes & appointments
      </Button>
      <Typography variant="body2" sx={{ marginTop: "20px", fontSize: "12px", color: "black", maxWidth: "400px" ,textAlign:"center"}}>
        Offer available for new members only. Spa and salon appointments are available after trial.
      </Typography>
    </HeroContainer>
  );
};

export default HeroPage;