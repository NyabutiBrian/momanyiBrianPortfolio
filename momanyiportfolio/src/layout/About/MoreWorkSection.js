import React from 'react'

function moreWorkSection() {
  return (
      <section className="bg-whity py-14 md:py-32 px-4" id="abouthelp">
          <div className="max-w-screen-xl mx-auto">
              <div className="text-darky">
                  <h6 className="py-2 px-4 text-center md:text-start text-2xl lg:text-5xl font-semibold">I can help you with...</h6>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div>
                      <div className="py-10 sm:py-4">
                          <h6 className="text-md py-2">01</h6>
                          <hr className="h-0.5 bg-darky" />
                      </div>
                      <div>
                          <h1 className="text-4xl font-medium mb-6">Design</h1>
                          <p>
                              Using Figma in designing websites and apps,
                              I deliver strong and user-friendly digital designs. Solid
                              company branding is the foundation of any successful website.
                          </p>
                      </div>
                  </div>

                  <div>
                      <div className="py-10 sm:py-4">
                          <h6 className="text-md py-2">02</h6>
                          <hr className="h-0.5 bg-darky" />
                      </div>
                      <div>
                          <h1 className="text-4xl font-medium mb-6">Development</h1>
                          <p>
                              I build salable websites from scratch that fit seamlessly
                              with design. My focus is on micro animations, transitions
                              and interaction.
                          </p>
                      </div>
                  </div>

                  <div>
                      <div className="py-10 sm:py-4">
                          <h6 className="text-md py-2">03</h6>
                          <hr className="h-0.5 bg-darky" />
                      </div>
                      <div>
                          <h1 className="text-4xl font-medium mb-6">Full Development</h1>
                          <p>
                              A complete website from concept to implementation,
                              that's what makes me stand out. My great sense for
                              design and my development skills enable me to create
                              kick-ass projects
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default moreWorkSection;
