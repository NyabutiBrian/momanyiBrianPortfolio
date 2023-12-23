import React, { useEffect } from 'react';
import darkWaveUp from '../../assets/images/dark-wave-haikei-up.svg';
import darkWaveDown from '../../assets/images/dark-wave-haikei-down.svg';
import { gsap } from 'gsap';

function AboutOverlayPage() {

    useEffect(() => {
        gsap.to("#overlay-page", {
          duration: 1,
          top: "-120%",
          delay: 1,
          ease: "expo.inOut"
        });
      }, []);

  return (
    <div id="overlay-page" class="fixed top-0 left-0 w-full min-h-screen bg-darky flex flex-col items-center justify-between z-50">
        <div class="-mt-5 md:-mt-20">
            <img src={darkWaveUp} alt="svg background up"/>
        </div>

        <div class="font-normal text-whity flex items-center justify-center">
            <h1 class="text-4xl">About Momanyi</h1>
        </div>
        
        <div class="-mb-5 md:-mb-20">
            <img src={darkWaveDown} alt="svg background down"/>
        </div>
    </div>
  )
}

export default AboutOverlayPage
