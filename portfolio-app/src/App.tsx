import React from 'react';
import Cursor from './components/cursor';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';

// import {Home, AboutMe} from './pages';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      <Cursor />
    </>
  );
}

export default App;
