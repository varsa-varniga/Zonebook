import { Box, Button, Container, TextField, Typography } from "@mui/material";

const Insights = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      {/* Blog Section */}
      <Box sx={{ py: 6, backgroundColor: "#F8F8F6" }}>
        <Typography variant="h5" fontWeight="bold">
          From our blog
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: 2,
            borderColor: "black",
            color: "black",
            textTransform: "none",
          }}
        >
          Visit our blog
        </Button>
      </Box>

      {/* Insights Section */}
      <Box sx={{ backgroundColor: "#606B4B", py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            
              flexWrap: "wrap", // Ensure responsiveness
              
            }}
          >
            {/* Text Section */}
            <Typography
              fontWeight={300}
              variant="h3"
              color="white"
              sx={{
                minWidth: "200px",
                flex: 1, // Allows it to take space equally
                textAlign: "left",
              }}
            >
              Get insights, event info and more
            </Typography>

            {/* Input and Button Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid white",
                maxWidth: "500px", // Increased input field width
                width: "100%",
                px: 1, // Padding for spacing inside box
                borderRadius: "4px", // Slight rounded corners for better design
              }}
            >
              <TextField
                variant="standard"
                placeholder="Email"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    color: "white",
                    padding: "10px 14px", // Increased padding for better UX
                    fontSize: "16px", // Slightly larger text for readability
                  },
                }}
                sx={{
                  backgroundColor: "transparent",
                  "& input::placeholder": { color: "white", opacity: 0.7 },
                  "& input": { padding: "10px 0px" },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#606B4B",
                  borderRadius: "0px 4px 4px 0px", // Matches input design
                  height: "50px", // Increased height to align correctly
               
                  minWidth: "150px", // Slightly wider button
                  textTransform: "none",
                  fontSize: "16px",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>

          {/* Disclaimer Text */}
          <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", mt: 2 }}>
            I agree to receive marketing and other communications from ZoneBook and its group companies.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Insights;
