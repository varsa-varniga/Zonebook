import React from "react";
import { Container, Typography, Grid, Card, Box, Chip, Stack, Divider } from "@mui/material";
import users from "../data/Users.js";

const UseCredit = () => {
  return (
    <Container sx={{ py: { xs: 3, md: 5 }, textAlign: "center" }}>
      {/* Heading */}
      <Typography variant="h5" fontWeight={600} sx={{ fontSize: { xs: "1.6rem", md: "2rem" } }}>
        How to use your credits
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4, fontSize: { xs: "0.8rem", md: "0.9rem" } }}>
        Here’s how some ClassPass members use their credits to create a routine that works for them.
      </Typography>

      {/* Cards Section */}
      <Grid container spacing={2} justifyContent="center">
        {users.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: { xs: 2, md: 3 },
                textAlign: "left",
                maxWidth: { xs: 260, sm: 300 },
                mx: "auto",
                boxShadow: "none",
              }}
            >
              {/* Profile Section */}
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <img
                  src={user.image}
                  alt={user.name}
                  style={{
                    width: "18%",
                    maxWidth: "80px",
                    height: "auto",
                    borderRadius: "50%",
                  }}
                />
                <Box>
                  <Typography fontWeight={700} sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }}>
                    {user.plan}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: "0.75rem" }}>
                    <strong>{user.name}</strong> • {user.location}
                  </Typography>
                </Box>
              </Stack>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: "0.75rem" }}>
                {user.description}
              </Typography>

              <Divider sx={{ my: 1, bgcolor: "black" }} />

              {/* Activities Section */}
              {user.activities.map((activity, i) => (
                <Box key={i} sx={{ mb: i === user.activities.length - 1 ? 0 : 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 1 }}>
                    {/* Left side: Activity title + count */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography fontWeight={600} sx={{ fontSize: "0.8rem" }}>
                        {activity.title}
                      </Typography>
                      {activity.count && (
                        <Chip
                          label={`x ${activity.count}`}
                          sx={{
                            bgcolor: "#E3EBFA",
                            color: "#1A73E8",
                            fontSize: "0.6rem",
                            height: 20,
                            fontWeight: 500,
                            px: 1.2,
                            borderRadius: "8px",
                          }}
                        />
                      )}
                    </Box>

                    {/* Right side: Credits */}
                    <Box sx={{ textAlign: "right", minWidth: "70px" }}>
                      <Typography sx={{ fontWeight: 600, fontSize: "0.8rem" }}>
                        {activity.credits} credits
                      </Typography>
                      {activity.note && (
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.65rem" }}>
                          {activity.note}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  {i !== user.activities.length - 1 && <Divider sx={{ mt: 0.5, mb: 1, bgcolor: "black" }} />}
                </Box>
              ))}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UseCredit;
