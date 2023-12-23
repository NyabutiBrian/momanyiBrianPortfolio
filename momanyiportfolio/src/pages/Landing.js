import React, { useEffect } from 'react';
import Navbar from '../layout/Landing/Navbar';
import HomeSection from '../layout/Landing/HomeSection';
import LandingOverlayPage from '../layout/Landing/LandingOverlayPage';
import AboutSection from '../layout/Landing/AboutSection';
import WorkSection from '../layout/Landing/WorkSection';
import Footer from '../components/Footer';
import { gsap } from 'gsap';

import waveUp from '../assets/images/wave-haikei-up.svg';
import waveDown from '../assets/images/wave-haikei-down.svg';


function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // MAGNETIC BUTTON
  useEffect(() => {
    const handleMouseEnter = (e) => {
      gsap.to(e.target, { duration: 0.3, scale: 1, ease: "power2.out" });
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = (e) => {
      gsap.to(e.target, { duration: 0.3, scale: 1, ease: "power2.out" });
      document.removeEventListener("mousemove", handleMouseMove);
      gsap.to(e.target, { duration: 0.3, x: 0, y: 0, ease: "power2.out" });
    };

    const handleMouseMove = (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(e.target, { duration: 0.2, x: x, y: y, ease: "power2.out" });
    };

    const magneticButtons = document.querySelectorAll(".magneticButton");

    magneticButtons.forEach((magneticButton) => {
      magneticButton.addEventListener("mouseenter", handleMouseEnter);
      magneticButton.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      magneticButtons.forEach((magneticButton) => {
        magneticButton.removeEventListener("mouseenter", handleMouseEnter);
        magneticButton.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
        < LandingOverlayPage />
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
