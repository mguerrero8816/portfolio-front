import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Career from './components/Career';

function App() {
  return (
    <Router>
      <div id='page-top'>
        <Navbar />
        <About />
        <Skills />
        <Achievements />
        <Career />
      </div>
    </Router>
  );
}

export default App;
