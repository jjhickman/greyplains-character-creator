import * as React from 'react';
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

const Home = () => {
  const [edition, setEdition] = React.useState('');

  const handleEditionChange = (event) => {
    setEdition(event.target.value);
  };

  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card>
          <CardContent>
            <Grid>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Edition</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={edition}
                  label="Edition"
                  onChange={handleEditionChange}
                >
                  <MenuItem value="Original">Original</MenuItem>
                </Select>
              </FormControl>
              <Link to="/character">
                <Button variant="contained">Start</Button>
              </Link>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Home;
