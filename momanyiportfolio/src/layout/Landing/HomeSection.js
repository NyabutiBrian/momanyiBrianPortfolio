import React from 'react';
import momanyidp from '../../assets/images/poet2.png';

function HomeSection() {

  return (
    <section className="z-40 overflow-hidden bg-secondary">
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
            <div className="up-effect relative max-w-7xl bottom-60 text-white text-9xl sm:text-9xl whitespace-nowrap flex flex-row marqueeContainer">
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
