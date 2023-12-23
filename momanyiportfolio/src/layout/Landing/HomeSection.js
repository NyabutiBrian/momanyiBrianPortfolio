import React, { useEffect, useRef } from 'react';
import momanyidp from '../../assets/images/poet2.png';
import { gsap } from 'gsap';

function HomeSection() {

    const marqueeRef = useRef(null);

    useEffect(() => {
        let currentScroll = 0;
        let isScrollingDown = true;

        const marqueeElements = marqueeRef.current.querySelectorAll('.marqueePart');

        const tween = gsap.to(marqueeElements, {
        x: '-300%',
        duration: 20,
        repeat: -1,
        ease: 'linear',
        });

        gsap.set(marqueeElements, { xPercent: -50 });

        const handleScroll = () => {
        if (window.pageYOffset > currentScroll) {
            isScrollingDown = true;
        } else {
            isScrollingDown = false;
        }

        gsap.to(tween, {
            timeScale: isScrollingDown ? 1 : -1,
        });

        currentScroll = window.pageYOffset;
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <section className="z-40 overflow-hidden bg-secondary scroll-m-16" id='home'>
        <div>
            <div className="up-effect relative flex items-end justify-center">
                <img src={momanyidp} alt="momanyi dp" className="max-w-xl md:max-w-lg xl:w-2/6" />
            </div>
            <div className="absolute min-w-full top-0 h-screen flex items-center">
                <div className="w-full flex items-center justify-between px-2 md:px-20">
                    <div className="text-white font-medium text-xs space-y-1 md:text-2xl px-8 py-4 md:px-0 md:py-0 rounded-full md:rounded-none bg-darky md:bg-transparent">
                        <p>Freelance</p>
                        <p>Front End Developer</p>
                        <p>I.T Support Specialist</p>
                    </div>
                    <div className="magneticButton flex items-center space-x-4 p-4 rounded-full bg-darky text-white font-medium text-xs md:text-base cursor-pointer">
                        <p>Nairobi, Kenya</p>
                        <div className="text-md md:text-4xl bg-secondary p-2 md:p-4 rounded-full">
                            <i className="fa-solid fa-globe fa-beat-fade"></i>
                        </div>
                    </div>
                </div>
            </div>
    
            {/* MARQUE EFFECT */}
            <div className="up-effect relative max-w-7xl bottom-60 text-white text-9xl sm:text-9xl whitespace-nowrap flex flex-row marqueeContainer" ref={marqueeRef}>
                <div className="block mr-9 marqueePart">
                    <p><i className="fa-solid fa-minus"></i> Momanyi Brian</p>
                </div>
                <div className="block mr-9 marqueePart">
                    <p><i className="fa-solid fa-minus"></i> Momanyi Brian</p>
                </div>
                <div className="block mr-9 marqueePart">
                    <p><i className="fa-solid fa-minus"></i> Momanyi Brian</p>
                </div>
                <div className="block mr-9 marqueePart">
                    <p><i className="fa-solid fa-minus"></i> Momanyi Brian</p>
                </div>
                <div className="block mr-9 marqueePart">
                    <p><i className="fa-solid fa-minus"></i> Momanyi Brian</p>
                </div>
                <div className="block mr-9 marqueePart">
                    <p><i className="fa-solid fa-minus"></i> Momanyi Brian</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSection;
