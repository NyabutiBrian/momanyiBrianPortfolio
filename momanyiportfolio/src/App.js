import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LandingOverlayWelcome from './pages/LandingOverlayWelcome';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from "react";

import { inject } from '@vercel/analytics';
inject();


function App() {

  return (
    <Router>
      <StrictMode>
        <Routes>
          <Route path="/" element={ <LandingOverlayWelcome /> } />
          <Route path="/home" element={ <Landing /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </StrictMode>
    </Router>
  );
}

export default App;
