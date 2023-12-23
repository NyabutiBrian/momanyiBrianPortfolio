import React, { useState, useEffect } from 'react';
import navlogo from '../../assets/images/navLogos/whiteNavLogo.png';
import { Link } from 'react-router-dom';
import { Collapse } from 'flowbite';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleButtonClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    useEffect(() => {
        const $targetEl = document.getElementById('targetEl');
        const $triggerEl = document.getElementById('triggerEl');
    
        const options = {
          onCollapse: () => {
            console.log('element has been collapsed');
          },
          onExpand: () => {
            console.log('element has been expanded');
          },
          onToggle: () => {
            console.log('element has been toggled');
          },
        };
    
        const instanceOptions = {
          id: 'targetEl',
          override: true
        };
    
        const collapse = new Collapse($targetEl, $triggerEl, options, instanceOptions);
        collapse.collapse();
    
        return () => {
          // Clean up the collapse instance if needed
        };
      }, []);

  return (
    <section className="z-40 sticky top-0">
        <nav className="bg-transparent">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:backdrop-blur-md rounded-full">
                <Link to="/home" className="p-4 md:p-0 rounded-full md:rounded-none bg-darky md:bg-transparent">
                    <img src={navlogo} className="md:h-8 h-6" alt="Momanyi Logo" />
                </Link>
                <button id="triggerEl" className="md:hidden text-white text-2xl p-4 md:p-0 rounded-full md:rounded-none bg-darky md:bg-transparent" data-collapse-toggle="targetEl" type="button" aria-controls="targetEl" aria-expanded={isMenuOpen ? "true" : "false"} onClick={handleButtonClick}>
                {isMenuOpen ? (
                    <div id="close-icon">
                    <i className="fa-solid fa-xmark"></i>
                    </div>
                ) : (
                    <div id="menu-icon">
                    <i className="fa-solid fa-bars"></i>
                    </div>
                )}
                </button>

                <div className="hidden w-full md:block md:w-auto" id="targetEl">
                    <ul className="font-medium text-4xl md:text-lg flex flex-col p-12 sm:p-24 md:p-0 mt-4 shadow-lg shadow-darky md:shadow-none rounded-lg bg-darky md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        <div className="md:hidden py-12 sm:py-4">
                            <h6 className="text-secondary text-xs py-2">NAVIGATION</h6>
                            <hr/>
                        </div>
                        <li>
                            <Link to="/home" class="block py-2 px-3 text-white rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" class="block py-2 px-3 text-white rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">About</Link>
                        </li>
                        <li>
                            <a href="/home#work" className="block py-2 px-3 text-white rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">Work</a>
                        </li>
                        <li>
                            <Link to="/contact" class="block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0" aria-current="page">Contact</Link>
                        </li>
                        <div className="md:hidden py-12 sm:py-4">
                            <hr/>
                        </div>
                        <div className="md:hidden">
                            <h6 className="text-secondary text-xs py-2">SOCIALS</h6>
                            <ul className="text-white text-sm flex space-x-4">
                                <li><a href="https://github.com/MomanyiPoet" target='LinkedIn'>LinkedIn</a></li>
                                <li><a href="https://github.com/MomanyiPoet" target='GitHub'>GitHub</a></li>
                                <li><a href="https://github.com/MomanyiPoet" target='TikTok'>TikTok</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar;
