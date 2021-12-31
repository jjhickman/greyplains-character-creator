import * as React from 'react';
import { Link, MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Basics from './pages/Basics';
import Abilities from './pages/Abilities';
import Skills from './pages/Skills';
import Features from './pages/Features';
import Results from './pages/Results';
import icon from './Greyplains_Icon.png';
import * as template from './character.json';
import './App.css';

const App = () => {
  const character = template;
  const [module, setModule] = React.useState('');

  const handleModuleChange = (event) => {
    setModule(event.target.value);
  };

  return (
    <Router>
      <div>
        <Grid container>
          <Grid item>
            <Link to="/">
              <img src={icon} alt="Greyplains" width={100} />
            </Link>
          </Grid>
          <Grid item>
            <h1>Greyplains Basics Creator</h1>
          </Grid>
        </Grid>
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
            render={() => (
              <Home module={module} handleModuleChange={handleModuleChange} />
            )}
          />
          <div>
            <Navbar />
            <Route
              path="/basics"
              render={() => <Basics character={character} />}
            />
          </div>
          <div>
            <Navbar />
            <Route
              path="/abilities"
              render={() => <Abilities character={character} />}
            />
          </div>
          <div>
            <Navbar />
            <Route
              path="/skills"
              render={() => <Skills character={character} />}
            />
          </div>
          <div>
            <Navbar />
            <Route
              path="/features"
              render={() => <Features character={character} />}
            />
          </div>
          <div>
            <Navbar />
            <Route
              path="/results"
              render={() => <Results character={character} />}
            />
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
