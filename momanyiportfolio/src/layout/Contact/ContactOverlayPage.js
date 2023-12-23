import React, { useEffect } from 'react'
import waveUp from '../../assets/images/wave-haikei-up.svg';
import waveDown from '../../assets/images/wave-haikei-down.svg';
import { gsap } from 'gsap';

function ContactOverlayPage() {

    useEffect(() => {
        gsap.to("#overlay-page", {
          duration: 1,
          top: "-120%",
          delay: 1,
          ease: "expo.inOut"
        });
      }, []);

  return (
    <div id="overlay-page" className="fixed top-0 left-0 w-full min-h-screen bg-whity flex flex-col items-center justify-between z-50">
        <div className="-mt-5 md:-mt-20">
            <img src={waveUp} alt="svg background up"/>
        </div>

        <div className="font-normal text-darky flex items-center justify-center">
            <h1 className="text-4xl">Holla Me Up</h1>
        </div>
        
        <div className="-mb-5 md:-mb-20">
            <img src={waveDown} alt="svg background down"/>
        </div>
    </div>
  )
}

export default ContactOverlayPage
