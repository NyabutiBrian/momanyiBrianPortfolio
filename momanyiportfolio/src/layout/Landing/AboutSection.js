import React from 'react'
import { Link } from 'react-router-dom';

function AboutSection() {
  return (
      <section className="bg-whity py-16 scroll-m-80" id="about">
          <div className="max-w-screen-xl mx-auto md:grid md:grid-cols-3 text-justify">
              <div className="col-span-2 p-4">
                  <p className="text-lg md:text-3xl text-justify">
                      Empowering brands to shine in the digital realm.
                      Let's redefine the norm and stay at the forefront.
                      No fluff, just leading the way in innovation
                  </p>
              </div>
              <div className="col-span-1 p-4 flex md:flex-col md:items-center justify-center space-y-28 md:space-y-10">
                  <div>
                      <p>
                          The combination of my passion for design, code & interaction
                          positions me in a unique place in the web design world
                      </p>
                  </div>
                  <div className="text-white flex items-center justify-center">
                      <Link to="/about" className="magneticButton bg-darky hover:bg-primary p-8 md:p-14 rounded-full whitespace-nowrap">More About Me</Link>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default AboutSection;
