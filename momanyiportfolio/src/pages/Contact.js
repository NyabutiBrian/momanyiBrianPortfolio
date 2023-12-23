import React, { useEffect } from 'react'
import ContactOverlayPage from '../layout/Contact/ContactOverlayPage'
import Navbar from '../layout/Contact/Navbar'
import ContactInput from '../layout/Contact/ContactInput'
import { gsap } from 'gsap';

function Contact() {
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
    <div style={{ backgroundColor: '#262626' }}>
        < ContactOverlayPage />
        < Navbar />
        < ContactInput />
    </div>
  )
}

export default Contact
