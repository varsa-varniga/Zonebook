import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const NavbarListmybuisness = () => {
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ZONEBOOK
        </Typography>
        <Box>
          <Button color="inherit">How it works</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Corporate wellness</Button>
          <Button color="inherit">Blog</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarListmybuisness;
