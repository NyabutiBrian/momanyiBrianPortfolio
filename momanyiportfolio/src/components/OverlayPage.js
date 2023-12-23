import React, { useEffect } from 'react';
import darkWaveUp from '../assets/images/dark-wave-haikei-up.svg';
import darkWaveDown from '../assets/images/dark-wave-haikei-down.svg';
import { gsap } from 'gsap';

function OverlayPage() {

  // OVERLAY EFFECT (WELCOME)
  useEffect(() => {
    gsap.to("#overlay-page", {
      duration: 2,
      top: "-120%",
      delay: 2,
      ease: "expo.inOut"
    });
  }, []);

  return (
    <div id="overlay-page" className="fixed top-0 left-0 w-full min-h-screen bg-darky flex flex-col items-center justify-between z-50">
        <div className="-mt-5 md:-mt-20">
            <img src={darkWaveUp} alt="svg background up" />
        </div>

        <div className="font-normal text-whity flex items-center justify-center">
            <h1 className="text-4xl">Home</h1>
        </div>
        
        <div className="-mb-5 md:-mb-20">
            <img src={darkWaveDown} alt="svg background down" />
        </div>
    </div>
  )
}

export default OverlayPage;
