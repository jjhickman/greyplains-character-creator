import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Character from './pages/Character';
import Abilities from './pages/Abilities';
import Skills from './pages/Skills';
import Features from './pages/Features';
import Results from './pages/Results';
import './App.css';

const routes = [
  {
    path: '/',
    component: Character
  },
  {
    path: '/abilities',
    component: Abilities
  },
  {
    path: '/skills',
    component: Skills
  },
  {
    path: '/features',
    component: Features
  },
  {
    path: '/results',
    component: Results
  },
];

export default function App() {
  return (
    <Router>
    <div>
    <h1>Greyplains Character Creator</h1>
      <Navbar routes={routes}/>
        <Switch>
          <Route path="/" exact component={Character} />
          <Route path="/abilities" component={Abilities} />
          <Route path="/skills" component={Skills} />
          <Route path="/features" component={Features} />
          <Route path="/results" component={Results} />
        </Switch>
      </div>
    </Router>
  );
}
