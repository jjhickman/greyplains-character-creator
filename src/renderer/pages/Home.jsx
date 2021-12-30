import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import PropTypes from 'prop-types';

import sidebar from '../Greyplains_Sidebar.jpg';

const Home = ({ module, handleModuleChange }) => {
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container columnSpacing={5}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Module</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={module}
                label="Module"
                onChange={handleModuleChange}
              >
                <MenuItem value="Original">Original</MenuItem>
              </Select>
            </FormControl>
            <hr />
            <Link to="/basics">
              <Button variant="contained" style={{ backgroundColor: '#111' }}>
                Start
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <img alt="sidebar" src={sidebar} height={550} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

Home.propTypes = {
  module: PropTypes.string,
  handleModuleChange: PropTypes.func,
};

Home.defaultProps = {
  module: 'original',
  handleModuleChange: console.log('Helllo'),
};

export default Home;
