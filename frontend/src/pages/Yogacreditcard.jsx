import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import Yoga from "../assets/yoga.jpg";

const Yogacreditcard= () => {
  return (
    <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 3, p: 1 }}>
      <CardContent>
        <Box display="flex" alignItems="center" > 
          <Box flex="1">
            <Typography variant="h6" fontWeight="bold">
              Vinyasa Flow
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Tue, Jul 6 · 4:30 PM – 5:15 PM
            </Typography>
            <Typography variant="body2">Vinnie M.</Typography>
          </Box>
          <CardMedia
            component="img"
            src={Yoga}// Replace with actual image URL
            alt="Yoga Session"
            sx={{ width: 80, height: 60, borderRadius: 1 }}
          />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              3 credits <s style={{ color: "gray" }}>6 credits</s>
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "lightgreen",
                color: "black",
                textTransform: "none",
                mt: 1,
                fontWeight:"bold"
              }}
            >
              Save 50%
            </Button>
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "blue",
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Reserve
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Yogacreditcard;
