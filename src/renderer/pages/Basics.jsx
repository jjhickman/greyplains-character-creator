import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Basics = () => {
  const speciesDescription = 'This is a species';
  const [totalLevel, setTotalLevel] = React.useState('');
  const [species, setSpecies] = React.useState('');
  const [archetype, setArchetype] = React.useState('');
  const [archetypeLevel, setArchetypeLevel] = React.useState('');
  const [classs, setClass] = React.useState('');
  const [classLevel, setClassLevel] = React.useState('');
  const [flavor, setFlavor] = React.useState('');
  const [flavorLevel, setFlavorLevel] = React.useState('');

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  const handleArchetypeChange = (event) => {
    setArchetype(event.target.value);
  };

  const handleArchetypeLevelChange = (event) => {
    setArchetypeLevel(event.target.value);
  };

  const handleClassChange = (event) => {
    setClass(event.target.value);
  };

  const handleClassLevelChange = (event) => {
    setClassLevel(event.target.value);
  };

  const handleFlavorChange = (event) => {
    setFlavor(event.target.value);
  };

  const handleFlavorLevelChange = (event) => {
    setFlavorLevel(event.target.value);
  };

  return (
    <div>
      <h2>Basics</h2>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <div>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Species
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={species}
                      label="Species"
                      onChange={handleSpeciesChange}
                    >
                      <MenuItem value="Human">Human</MenuItem>
                      <MenuItem value="Dwarf">Dwarf</MenuItem>
                      <MenuItem value="Elf">Elf</MenuItem>
                      <MenuItem value="Halfling">Halfling</MenuItem>
                      <MenuItem value="Gnome">Gnome</MenuItem>
                      <MenuItem value="Half-Grean">Half-Grean</MenuItem>
                    </Select>
                  </FormControl>
                  &nbsp;
                  <Card>
                    <CardContent>{speciesDescription}</CardContent>
                  </Card>
                  &nbsp;
                  <hr />
                  &nbsp;
                </div>
              </Grid>
              <Grid item xs={6}>
                <Grid>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Class</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={classs}
                      label="Class"
                      onChange={handleClassChange}
                    >
                      <MenuItem value="Warrior">Warrior</MenuItem>
                      <MenuItem value="Expert">Expert</MenuItem>
                      <MenuItem value="Sage">Sage</MenuItem>
                      <MenuItem value="Arcanist">Arcanist</MenuItem>
                    </Select>
                    &nbsp;
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={classLevel}
                      label="Level"
                      onChange={handleClassLevelChange}
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                &nbsp;
                <hr />
                &nbsp;
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Archetype
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={archetype}
                    label="Archetype"
                    onChange={handleArchetypeChange}
                  >
                    <MenuItem value="Soldier">Soldier</MenuItem>
                    <MenuItem value="Savage">Savage</MenuItem>
                    <MenuItem value="Ranger">Ranger</MenuItem>
                    <MenuItem value="Knight">Knight</MenuItem>
                  </Select>
                  &nbsp;
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={archetypeLevel}
                    label="Level"
                    onChange={handleArchetypeLevelChange}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
                &nbsp;
                <hr />
                &nbsp;
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Flavor</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={flavor}
                    label="Flavor"
                    onChange={handleFlavorChange}
                  >
                    <MenuItem value="Expert">Expert (Universal)</MenuItem>
                    <MenuItem value="Sage">Sage (Universal)</MenuItem>
                    <MenuItem value="Arcanist">Arcanist (Universal)</MenuItem>
                    <MenuItem value="Monster Hunter">Monster Hunter</MenuItem>
                    <MenuItem value="Brawler">Brawler</MenuItem>
                    <MenuItem value="Paladin">Paladin</MenuItem>
                    <MenuItem value="Marksman">Marksman</MenuItem>
                  </Select>
                  &nbsp;
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={flavorLevel}
                    label="Level"
                    onChange={handleFlavorLevelChange}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Basics;
