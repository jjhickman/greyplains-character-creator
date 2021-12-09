import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            Character
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            Abilities
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            Skills
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            Features
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            Results
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
