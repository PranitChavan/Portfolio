import './App.css';
import { ContextProvider } from './Context';
import { Landing } from './Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portraits } from './Portraits';
import Backgrounds from './Backgrounds';

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

        <ContextProvider></ContextProvider>
      </Router>
    </>
  );
}

export default App;
