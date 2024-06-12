import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar />
      <About />
    </Router>
  );
}

export default App;
