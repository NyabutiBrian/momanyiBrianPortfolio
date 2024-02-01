import React, { useEffect } from 'react'
import msavvy from '../../assets/images/works/msavvy.png'
import usgms from '../../assets/images/works/usgms.png'
import poeticInspiration from '../../assets/images/works/poeticInspiration.png'
import newYear from '../../assets/images/works/new-year.png'
import merryXmas from '../../assets/images/works/merry-xmas.png'
import johnWick from '../../assets/images/works/johnWick.png'
import { gsap } from 'gsap';

function WorkSection() {
    // IMAGE POP UP
    useEffect(() => {
        const imageContainers = document.querySelectorAll('.hover-text');

        imageContainers.forEach((imageContainer) => {
            const popUpImage = imageContainer.querySelector('.hover-img');

            imageContainer.addEventListener('mouseenter', function () {
                gsap.to(popUpImage, { duration: 0.6, opacity: 1, scale: 1.1, ease: 'power2.out' });
            });

            imageContainer.addEventListener('mouseleave', function () {
                gsap.to(popUpImage, { duration: 0.6, opacity: 0, scale: 1, ease: 'power2.out' });
            });
        });
    }, []);

  return (
    <section className="bg-whity py-16 scroll-m-8" id="work">
        <div className="max-w-screen-xl mx-auto">
            <div className="text-darky">
                <h6 className="py-2 px-4 text-center md:text-start">RECENT WORK</h6>
                <hr className="bg-secondary h-0.5 w-3/4 md:w-full mx-auto"/>
            </div>

            <a href="https://msavvy-blog-site-react-django.vercel.app/" target="MSavvy" className="hover-text">
                <div className="py-12 px-4 grid md:grid-cols-2">
                    <div className="md:hidden px-4 py-12 bg-darky">
                        <img src={msavvy} alt="msavvy blogite"/>
                    </div>
                    <div className="py-7 md:py-0">
                        <h5 className="text-2xl lg:text-5xl md:font-semibold">MSavvy Web Blog Site</h5>
                    </div>
                    <div className="flex items-center justify-between text-sm sm:text-base lg:text-lg">
                        <p>React, Bootstrap 5, Django, Python, PostgreSQL</p>
                        <p>2023</p>
                    </div>
                    <span className="absolute hover-img px-4 py-12 md:bg-darky w-0 md:w-2/4 lg:w-1/4">
                        <img src={msavvy} alt="msavvy blogite"/>
                    </span>
                </div>
                <hr className="bg-secondary h-0.5 w-3/4 md:w-full mx-auto"/>
            </a>

            <a href="https://utawala-servicesgms.000webhostapp.com/index.php" target="usgms" className="hover-text">
                <div className="py-12 px-4 grid md:grid-cols-2">
                    <div className="md:hidden px-4 py-12 bg-secondary">
                        <img src={usgms} alt="utawala sgms"/>
                    </div>
                    <div className="py-7 md:py-0">
                        <h5 className="text-2xl lg:text-5xl md:font-semibold">Utawala SGMS</h5>
                    </div>
                    <div className="flex items-center justify-between text-sm sm:text-base lg:text-lg">
                        <p>HTML, JS, Bootstrap 5, PHP, MySQL</p>
                        <p>2023</p>
                    </div>
                    <span className="absolute hover-img px-4 py-12 md:bg-secondary w-0 md:w-2/4 lg:w-1/4">
                        <img src={usgms} alt="msavvy blogite"/>
                    </span>
                </div>
                <hr className="bg-secondary h-0.5 w-3/4 md:w-full mx-auto"/>
            </a>

            <a href="https://poetic-inspirations.netlify.app/" target="poetic inspirations" className="hover-text">
                <div className="py-12 px-4 grid md:grid-cols-2">
                    <div className="md:hidden px-4 py-12 bg-primary">
                        <img src={poeticInspiration} alt="poetic inspirations"/>
                    </div>
                    <div className="py-7 md:py-0">
                        <h5 className="text-2xl lg:text-5xl md:font-semibold">Poetic Inspiration Website</h5>
                    </div>
                    <div className="flex items-center justify-between text-sm sm:text-base lg:text-lg">
                        <p>HTML, JS, Bootstrap 5</p>
                        <p>2023</p>
                    </div>
                    <span className="absolute hover-img px-4 py-12 md:bg-primary w-0 md:w-2/4 lg:w-1/4">
                        <img src={poeticInspiration} alt="msavvy blogite"/>
                    </span>
                </div>
                <hr className="bg-secondary h-0.5 w-3/4 md:w-full mx-auto"/>
            </a>

            <div class="text-darky pt-24">
                <h6 class="py-2 px-4 text-center md:text-start">NOTEWORTHY PROJECTS</h6>
                <hr class="bg-secondary h-0.5 w-3/4 md:w-full mx-auto" />
            </div>

            <a href="https://new-year-ruddy.vercel.app/" target="New Year Website" class="hover-text">
                <div class="py-12 px-4 grid md:grid-cols-2">
                    <div class="md:hidden px-4 py-12 bg-darky">
                        <img src={newYear} alt="New Year Screenshot" />
                    </div>
                    <div class="py-7 md:py-0">
                        <h5 class="text-2xl lg:text-5xl md:font-semibold">New Year Website</h5>
                    </div>
                    <div class="flex items-center justify-between text-sm sm:text-base lg:text-lg">
                        <p>HTML, CSS, Tailwind CSS, JS</p>
                        <p>2023</p>
                    </div>
                    <span class="absolute hover-img px-4 py-12 md:bg-darky w-0 md:w-2/4 lg:w-1/4">
                        <img src={newYear} alt="msavvy blogite" />
                    </span>
                </div>
                <hr class="bg-secondary h-0.5 w-3/4 md:w-full mx-auto" />
            </a>

            <a href="https://christmas-theta.vercel.app/" target="Merry Chrismas" class="hover-text">
                <div class="py-12 px-4 grid md:grid-cols-2">
                    <div class="md:hidden px-4 py-12 bg-secondary">
                        <img src={merryXmas} alt="Merry Chrismas Screenshot" />
                    </div>
                    <div class="py-7 md:py-0">
                        <h5 class="text-2xl lg:text-5xl md:font-semibold">Merry Chrismas Website</h5>
                    </div>
                    <div class="flex items-center justify-between text-sm sm:text-base lg:text-lg">
                        <p>HTML, CSS, Tailwind CSS, JS</p>
                        <p>2023</p>
                    </div>
                    <span class="absolute hover-img px-4 py-12 md:bg-secondary w-0 md:w-2/4 lg:w-1/4">
                        <img src={merryXmas} alt="Merry Chrismas Screenshot" />
                    </span>
                </div>
                <hr class="bg-secondary h-0.5 w-3/4 md:w-full mx-auto" />
            </a>

            <a href="https://momanyipoet.github.io/portfolio-6_John_Wick/" target="JohnWick" class="hover-text">
                <div class="py-12 px-4 grid md:grid-cols-2">
                    <div class="md:hidden px-4 py-12 bg-primary">
                        <img src={johnWick} alt="John Wick" />
                    </div>
                    <div class="py-7 md:py-0">
                        <h5 class="text-2xl lg:text-5xl md:font-semibold">John Wick</h5>
                    </div>
                    <div class="flex items-center justify-between text-sm sm:text-base lg:text-lg">
                        <p>HTML, CSS, JS</p>
                        <p>2023</p>
                    </div>
                    <span class="absolute hover-img px-4 py-12 md:bg-primary w-0 md:w-2/4 lg:w-1/4">
                        <img src={johnWick} alt="msavvy blogite" />
                    </span>
                </div>
                <hr class="bg-secondary h-0.5 w-3/4 md:w-full mx-auto" />
            </a>

        </div>
    </section>
  )
}

export default WorkSection;
