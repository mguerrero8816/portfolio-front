import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Career from './components/Career';
import Education from './components/Education';
import DropboxAccount from './components/dropbox/DropboxAccount';

function App() {
  return (
    <Router>
      <div id='page-top'>
        <Navbar />
        <About />
        <DropboxAccount />
        <Skills />
        <Achievements />
        <Career />
      </div>
    </Router>
  );
}

export default App;
