import React from 'react';
import Navbar from '../layout/Landing/Navbar';
import HomeSection from '../layout/Landing/HomeSection';
import OverlayWelcome from '../components/OverlayWelcome';
import OverlayPage from '../components/OverlayPage';
import AboutSection from '../layout/Landing/AboutSection';
import WorkSection from '../layout/Landing/WorkSection';
import Footer from '../components/Footer';

import waveUp from '../assets/images/wave-haikei-up.svg';
import waveDown from '../assets/images/wave-haikei-down.svg';


function Landing() {
  return (
    <div>
        < OverlayPage />
        < OverlayWelcome />
        < Navbar />
        < HomeSection />

        {/* WAVE SVG */}
        <div className="relative w-full -mt-40 md:-mt-52 z-30">
            <img src={waveUp} alt="svg background up" className="up-effect" />
            < AboutSection />
            < WorkSection />
            <img src={waveDown} alt="svg background down" />
        </div>

        < Footer />
    </div>
  )
}

export default Landing;
