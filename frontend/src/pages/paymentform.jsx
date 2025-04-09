import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  Link,
} from "@mui/material";

const PaymentForm = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={0} sx={{ p: 3, pt: 4 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            alignSelf: "flex-start",
            mb: 4,
            fontSize: "0.9rem",
          }}
        >
          5 of 5
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: "#3c4043",
            fontWeight: "bold",
            mb: 3,
            fontSize: "1.8rem",
          }}
        >
          WHAT'S YOUR PAYMENT INFO
          <br />
          FOR FUTURE REFERENCE
        </Typography>

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Don't worry, during your trial we won't charge you extra
          </Typography>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            unless you purchase add-ons or a late or missed cancel fee applies.
          </Typography>
          <Typography variant="body1">
            You can cancel your trial at any time.
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          sx={{ mb: 4, px: 3 }}
        >
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <Typography variant="body1" sx={{ color: "#5f6368" }}>
              1 month free
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Typography variant="body1" sx={{ color: "#5f6368" }}>
              30Credits
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Typography variant="body1" sx={{ color: "#5f6368" }}>
              $ 0
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Save your billing information
        </Typography>

        <Box component="form" sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1, fontSize: "0.9rem" }}>
            Name on card
          </Typography>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />

          <Typography variant="body2" sx={{ mb: 1, fontSize: "0.9rem" }}>
            Card number
          </Typography>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ mb: 1, fontSize: "0.9rem" }}>
                Exp date
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="MM/YYYY"
                variant="outlined"
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1,
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ mb: 1, fontSize: "0.9rem" }}>
                CVC
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1,
                  },
                }}
              />
            </Grid>
          </Grid>

          <Typography variant="body2" sx={{ mb: 1, fontSize: "0.9rem" }}>
            Postal Code
          </Typography>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />

          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            {/* Payment method box - matching the UI image */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              {/* Stripe button */}
              <Box
                sx={{
                  border: "1px solid #dadce0",
                  borderRadius: 1,
                  px: 2,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  mr: 1,
                }}
              >
                <Typography
                  sx={{ color: "#5f6368", fontSize: "0.75rem", mr: 1 }}
                >
                  Powered by
                </Typography>
                <Typography
                  sx={{
                    color: "#635bff",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  stripe
                </Typography>
              </Box>

              {/* VISA logo */}
              <Box
                sx={{
                  border: "1px solid #dadce0",
                  borderRadius: 1,
                  px: 1.5,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  mr: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#1434cb",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    letterSpacing: "0.5px",
                    fontFamily: "sans-serif",
                  }}
                >
                  VISA
                </Typography>
              </Box>

              {/* Mastercard logo */}
              <Box
                sx={{
                  border: "1px solid #dadce0",
                  borderRadius: 1,
                  px: 1.5,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  mr: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 15,
                      height: 15,
                      borderRadius: "50%",
                      bgcolor: "#eb001b",
                      mr: -0.8,
                    }}
                  />
                  <Box
                    sx={{
                      width: 15,
                      height: 15,
                      borderRadius: "50%",
                      bgcolor: "#f79e1b",
                    }}
                  />
                </Box>
              </Box>

              {/* AMEX logo */}
              <Box
                sx={{
                  border: "1px solid #dadce0",
                  borderRadius: 1,
                  px: 1.5,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#006fcf",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                  }}
                >
                  AMEX
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ px: 1, mb: 1 }}>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                fontSize: "0.75rem",
                color: "#5f6368",
                lineHeight: 1.4,
              }}
            >
              By clicking the button below, you agree to the{" "}
              <Link href="#" underline="always" color="inherit">
                Terms
              </Link>
              , and your free 1 month 30-credit trial will begin. If you don't
              cancel before the trial ends, you'll automatically be charged for
              a full-priced monthly credit plan (currently ₹1408 + any tax for
              30 credits per month), until you cancel or change your plan.
              Cancel anytime in Settings to avoid renewal.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 2,
                fontSize: "0.75rem",
                color: "#5f6368",
                lineHeight: 1.4,
              }}
            >
              Fees apply for reservations missed or canceled late. No refunds.
              New members only.{" "}
              <Link href="#" underline="always" color="inherit">
                Credits expire
              </Link>
              . Inventory varies per location and may be limited during trial.{" "}
              <Link href="#" underline="always" color="inherit">
                Privacy Notice
              </Link>{" "}
              applies.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#5a6845",
                "&:hover": { bgcolor: "#4a5835" },
                borderRadius: 28,
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: "medium",
                boxShadow: "none",
              }}
            >
              Start Membership
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default PaymentForm;
