import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import task1 from "../assets/task1.png"; // Ensure images are in src/assets/
import task2 from "../assets/task2.png";
import task3 from "../assets/task3.png";

const tasks = [
  {
    image: task1,
    title: "Get discovered by new clients",
    description: "Reach a global community committed to their fitness & wellness goals and access targeted promotions to get them through your doors.",
  },
  {
    image: task2,
    title: "Fill your empty spots",
    description: "Pack your schedule by listing available classes and appointments for our members to book. We’ll even cover no-shows and late cancellations.",
  },
  {
    image: task3,
    title: "Generate more revenue",
    description: "Get paid for reservations made through ZoneBook and use the extra income to grow your business.",
  },
];

const Tasks = () => {
  return (
    <Box sx={{ backgroundColor: "white", py: 6, px: { xs: 2, md: 6 } }}>
      <Grid container spacing={3} justifyContent="center">
        {tasks.map((task, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: "none", borderRadius: "16px" }}>
              <CardMedia component="img" image={task.image} alt={task.title} sx={{ borderRadius: "16px" }} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {task.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {task.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tasks;
