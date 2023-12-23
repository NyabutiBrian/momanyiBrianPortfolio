import React, { useState, useEffect } from 'react'
import whiteLogoFull from '../assets/images/navLogos/whiteLogoFull.png';
import { Link } from 'react-router-dom';

function Footer() {
    // When the user scrolls down 800px from the top of the document, show the footer
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        function handleScroll() {
        if (window.scrollY > 800) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <footer className={showFooter ? "bg-darky pt-28 -mt-28 sticky bottom-0" : "hidden"} id="footer-sec">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col">
            <div className="py-8">
                <div>
                    <img src={whiteLogoFull} alt="momanyi logo" className="w-3/4 md:w-1/2"/>
                </div>
                <div>
                    <h2 className="text-4xl sm:text-7xl text-white font-normal">Let's work together</h2>
                </div>
            </div>
            <div className="relative my-14">
                <div className="magneticButton absolute -top-12 md:-top-20 right-20 md:right-40 z-30 text-white flex items-center justify-center">
                    <Link to="/contact" className="bg-primary p-8 md:p-14 rounded-full whitespace-nowrap">Get in touch</Link>
                </div>
                <hr className="bg-secondary h-0.5 w-full absolute top-1/2 transform -translate-y-1/2"/>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-8 mb-10 md:mb-2">
                <div className="text-white p-4 md:p-6 border rounded-full text-xs md:text-base">
                    <p>momanyiturner@gmail.com</p>
                </div>
                <div className="text-white p-4 md:p-6 border rounded-full text-xs md:text-base">
                    <p>(+254) 700 013 897</p>
                </div>
            </div>
            <div className="flex items-center justify-between py-4">
                <div className="">
                    <h6 className="text-secondary text-xs md:text-sm py-2">LOCAL TIME</h6>
                    <div className="text-white text-sm md:text-md flex space-x-4">
                        <p>17:00 PM</p>
                        <p>EAT</p>
                    </div>
                </div>
                <div className="">
                    <h6 className="text-secondary text-xs md:text-sm py-2">SOCIALS</h6>
                    <ul className="text-white text-sm md:text-md flex space-x-4">
                        <li><a href="https://github.com/MomanyiPoet" target='LinkedIn'>LinkedIn</a></li>
                        <li><a href="https://github.com/MomanyiPoet" target='GitHub'>GitHub</a></li>
                        <li><a href="https://github.com/MomanyiPoet" target='TikTok'>TikTok</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
