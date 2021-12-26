import { Link, MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Character from './pages/Character';
import Abilities from './pages/Abilities';
import Skills from './pages/Skills';
import Features from './pages/Features';
import Results from './pages/Results';
import './App.css';

const routes = [
  {
    path: '/',
    component: Character,
  },
  {
    path: '/abilities',
    component: Abilities,
  },
  {
    path: '/skills',
    component: Skills,
  },
  {
    path: '/features',
    component: Features,
  },
  {
    path: '/results',
    component: Results,
  },
];

export default function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to="/">
            <img src="./Greyplains_Icon.png" alt="Greyplains" />
          </Link>
          <h1>Greyplains Character Creator</h1>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <div>
            <Navbar routes={routes} />
            <Route path="/character" component={Character} />
          </div>
          <div>
            <Navbar routes={routes} />
            <Route path="/abilities" component={Abilities} />
          </div>
          <div>
            <Navbar routes={routes} />
            <Route path="/skills" component={Skills} />
          </div>
          <div>
            <Navbar routes={routes} />
            <Route path="/features" component={Features} />
          </div>
          <div>
            <Navbar routes={routes} />
            <Route path="/results" component={Results} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}
