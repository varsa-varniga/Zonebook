import { Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";
import React from "react";
import schedule1 from '../assets/schedule1.png';
import schedule2 from '../assets/schedule2.png';
import schedule3 from '../assets/schedule3.png';

const tasks = [
  {
    image: schedule1,
    title: " Maximize revenue with SmartTools",
    description: "Increase your reservations and revenue by +50%* with our intelligent spot management system.",
  },
  {
    image: schedule2,
    title: " Automate your schedule",
    description: "Keep your calendar up to date and avoid overbooking as changes auto-update in your booking system.",
  },
  {
    image: schedule3,
    title: "Gain access to additional insights",
    description: "Get a peek at your ClassPass utilization data in the partner dashboard.",
  },
];

const Schedule = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" align="center">
          Perks of syncing your schedule
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          Get exclusive benefits to help grow your business faster — only available to partners who integrate their software.
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: "white", py: 6, px: { xs: 2, md: 6 } }}>
        <Grid container spacing={3} justifyContent="center">
          {tasks.map((task, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: "none", borderRadius: "16px" }}>
                <CardMedia component="img" image={task.image} alt={task.title} sx={{ borderRadius: "16px" }} />
                <CardContent>
                  <Typography variant="h6" fontWeight="300">
                    {task.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {task.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Schedule;
