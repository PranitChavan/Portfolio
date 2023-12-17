import './App.css';
import { Landing } from './Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portraits } from './Portraits';
import Backgrounds from './Backgrounds';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>

        <Routes>
          <Route path="/portraits" element={<Portraits />}></Route>
        </Routes>

        <Routes>
          <Route path="/backgrounds" element={<Backgrounds />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
