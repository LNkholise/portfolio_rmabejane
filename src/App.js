import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import LoadingScreen from './components/Loader';

// Pages
import Home from './pages/Home';
import Works from './pages/Works';
import Details from './pages/WorksDetail';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div className="App">
      <Navbar />
      {loading ? <LoadingScreen /> : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selected-works" element={<Works />} />
          <Route path="/selected-works/:selection" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
