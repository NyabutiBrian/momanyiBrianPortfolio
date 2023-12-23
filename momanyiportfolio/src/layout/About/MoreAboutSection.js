import React from 'react'

function moreAboutSection() {
  return (
      <section className="bg-whity py-16" id="moreabout">
          <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-3">
              <div className="col-span-1 p-4">
                  <p className="text-lg md:text-xl">
                      With over 1 year of dynamic experience as an IT specialist and front-end developer, crafting visually stunning and user-friendly websites.
                      To sharpen my skills, I attended the prestigious ALX Software Engineering Boot camp and Power Learn Project Program, where I perfected
                      my front-end development abilities. I recently graduated with a Bsc Information Technology at KCA University, completed the IT Professional
                      certificate on Coursera, expanding my knowledge in IT infrastructure.
                  </p>
              </div>
              <div className="col-span-2 p-4 flex flex-col items-start justify-start">
                  <div className="mx-2 font-semibold">
                      <p>Technologies I have been working with:</p>
                  </div>
                  <div className="flex flex-wrap py-4 mx-2">
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">HTML</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">CSS</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">Bootstrap 5</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">Tailwind CSS</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">Javascript</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">Typescript</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">React</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">Node JS</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">Python</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">Django, Django Rest Framework</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">PostgreSQL</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">MySQL</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">Git</p>
                      </div>
                      <div className="bg-primary rounded-full p-3 m-1">
                          <p className="text-sm text-white">GitHub</p>
                      </div>
                  </div>
                  <div className="m-2 font-semibold">
                      <p>I.T Specialization includes:</p>
                  </div>
                  <div className="flex flex-col space-y-4">
                      <p>Managing technology infrastructure such as Installation, configuration, and maintenance of hardware and software systems.</p>
                      <p>Providing technical support by assisting end-users in resolving technical issues and offering guidance on system usage and addressing connectivity issues.</p>
                      <p>Maintaining network security by implementing measures to safeguard an organization's computer systems and networks from cyber threats.</p>
                      <p>Managing data backup and recovery, secure storage, retrieval, and integrity of organizational data.</p>
                      <p>Implementing and upgrading systems by deploying new technologies and upgrading existing systems.</p>
                      <p>Collaborating with teams by working closely with other departments and teams to understand their technology needs. Provides solutions that enhance overall efficiency and contribute to the organization's strategic objectives.</p>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default moreAboutSection;
