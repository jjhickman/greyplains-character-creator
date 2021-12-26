import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Navbar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/character">Character</Link>
          <Link to="/abilities">Abilities</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/features">Features</Link>
          <Link to="/results">Results</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
