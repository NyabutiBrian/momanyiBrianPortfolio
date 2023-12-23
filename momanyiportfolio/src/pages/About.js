import React, { useEffect } from 'react'
import waveUp from '../assets/images/wave-haikei-up.svg';
import waveDown from '../assets/images/wave-haikei-down.svg';
import AboutOverlayPage from '../layout/About/AboutOverlayPage';
import Navbar from '../layout/About/Navbar';
import AboutHeader from '../layout/About/AboutHeader';
import MoreAboutSection from '../layout/About/MoreAboutSection';
import MoreWorkSection from '../layout/About/MoreWorkSection';
import Footer from '../components/Footer';
import { gsap } from 'gsap';

function About() {
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
        < AboutOverlayPage />
        < Navbar />

        {/* WAVE SVG */}
        <div className="up-effect wavesvg relative w-full z-30">
            <img src={waveUp} alt="svg background up" className="up-effect" />

              < AboutHeader />
              < MoreAboutSection />
              < MoreWorkSection />

            <img src={waveDown} alt="svg background down" />
        </div>

        < Footer />
    </div>
  )
}

export default About
