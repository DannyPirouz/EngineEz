import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyCars from './pages/MyCars';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/MyCars" element = {<MyCars />} />
      </Routes>
    </Router>
  );
}

export default App;
