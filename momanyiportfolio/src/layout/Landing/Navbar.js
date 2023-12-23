import React from 'react';
import navlogo from '../../assets/images/navLogos/whiteNavLogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    // Code to handle the mobile menu button click event
    document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.getElementById('mobile-menu-button');
        const menuIcon = document.querySelector('#menu-icon i');
        const closeIcon = document.querySelector('#close-icon i');

        menuButton.addEventListener('click', function() {
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-xmark');
        });
    });

  return (
    <section className="z-40 sticky top-0">
        <nav className="bg-transparent">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:backdrop-blur-md rounded-full">
                <a href="./index.html" className="p-4 md:p-0 rounded-full md:rounded-none bg-darky md:bg-transparent">
                    <img src={navlogo} className="md:h-8 h-6" alt="Momanyi Logo" />
                </a>
                <button id="mobile-menu-button" className="md:hidden text-white text-2xl p-4 md:p-0 rounded-full md:rounded-none bg-darky md:bg-transparent" data-collapse-toggle="navbar-default" type="button">
                    <div id="menu-icon">
                        <i  className="fa-solid fa-bars"></i>
                    </div>
                    <div id="close-icon" className="hidden">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium text-4xl md:text-lg flex flex-col p-12 sm:p-24 md:p-0 mt-4 shadow-lg shadow-darky md:shadow-none rounded-lg bg-darky md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        <div className="md:hidden py-12 sm:py-4">
                            <h6 className="text-secondary text-xs py-2">NAVIGATION</h6>
                            <hr/>
                        </div>
                        <li>
                            <Link to="/" className="block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:text-darky md:p-0" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="block py-2 px-3 text-white rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-darky md:p-0">About</Link>
                        </li>
                        <li>
                            <a href="#work" className="block py-2 px-3 text-white rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-darky md:p-0">Work</a>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 px-3 text-white rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-darky md:p-0">Contact</Link>
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
