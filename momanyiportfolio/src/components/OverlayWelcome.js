import React, { useState, useEffect } from 'react';
import darkWaveUp from '../assets/images/dark-wave-haikei-up.svg';
import darkWaveDown from '../assets/images/dark-wave-haikei-down.svg';
import { gsap } from 'gsap';

function OverlayWelcome() {
  // Changing code dynamically
  const greetings = ["Hello", "Jambo", "Ciao", "Bonjour", "Привет", "नमस्ते"];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((currentGreetingIndex + 1) % greetings.length);
    }, 500); // Change the text every 0.2 second

    return () => clearInterval(interval);
  }, [currentGreetingIndex]);

  // OVERLAY EFFECT (WELCOME)
  useEffect(() => {
    gsap.to("#overlay", {
      duration: 2,
      top: "-120%",
      delay: 2,
      ease: "expo.inOut"
    });
  }, []);

  return (
    <div id="overlay" className="fixed top-0 left-0 w-full min-h-screen bg-darky flex flex-col items-center justify-between z-50">
        <div className="-mt-5 md:-mt-20">
            <img src={darkWaveUp} alt="svg background up" />
        </div>

        <div className="font-normal text-white flex items-center justify-center">
            <span className="text-2xl mr-2"><i className="fa-solid fa-location-dot"></i> </span>
            <h1 className="text-4xl">{greetings[currentGreetingIndex]}</h1>
        </div>
        
        <div className="-mb-5 md:-mb-20">
            <img src={darkWaveDown} alt="svg background down" />
        </div>
    </div>
  )
}

export default OverlayWelcome;
