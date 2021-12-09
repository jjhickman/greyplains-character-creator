import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Character from './pages/Character';
import Abilities from './pages/Abilities';
import Skills from './pages/Skills';
import Features from './pages/Features';
import Results from './pages/Results';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Character} />
        <Route path="/abilities" component={Abilities} />
        <Route path="/skills" component={Skills} />
        <Route path="/features" component={Features} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  );
}
