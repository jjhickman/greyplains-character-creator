import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#bbb' }}>
        <Toolbar>
          <Link to="/basics">Basics</Link>
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
