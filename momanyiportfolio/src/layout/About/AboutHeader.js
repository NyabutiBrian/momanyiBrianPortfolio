import React from 'react'

function aboutHeader() {
  return (
      <header className="bg-whity py-32">
          <div className="max-w-screen-xl mx-auto px-4">
              <div className="py-8 text-4xl sm:text-7xl text-darky font-normal space-y-8 leading-10">
                  <h2>Empowering brands to shine in the digital realm.</h2>
              </div>
              <div className="relative my-16">
                  <div className="magneticButton cursor-pointer absolute -top-12 md:-top-20 right-20 md:right-40 z-30 text-white flex items-center justify-center">
                      <div className="bg-primary p-8 md:p-14 rounded-full text-4xl">
                          <i className="fa-solid fa-globe fa-beat-fade"></i>
                      </div>
                  </div>
                  <hr className="bg-darky h-0.5 w-full absolute top-1/2 transform -translate-y-1/2" />
              </div>
          </div>
      </header>
  )
}

export default aboutHeader;
