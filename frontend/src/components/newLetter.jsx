import React from 'react';
import { Card, Typography, TextField, Button, Checkbox, FormControlLabel, Box, Grid, Link } from '@mui/material';

const Newsletter = () => (
  <Card variant="outlined" sx={{ margin: 2, padding: 3, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
    <Typography variant="h6" gutterBottom>
      Stay in the loop with email updates
    </Typography>
    <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="First name" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Last name" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Business email" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Company name" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="I agree to receive marketing and other communications from ZoneBook and its group companies."
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            You can unsubscribe from these communications at any time. For more information, please review our{' '}
            <Link href="#" underline="hover">Terms of Use</Link> and{' '}
            <Link href="#" underline="hover">Privacy Policy</Link>.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            size="large"
            sx={{ borderRadius: 50, textTransform: 'none' }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

export default Newsletter;
