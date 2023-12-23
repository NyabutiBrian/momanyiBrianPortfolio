import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// JavaScript code to change the text dynamically
const greetings = ["Hello", "Jambo", "Ciao", "Bonjour", "Привет ", "नमस्ते "];
let currentGreetingIndex = 0;
const h1Element = document.querySelectorAll('#greeting');

function changeGreeting() {
  h1Element.textContent = greetings[currentGreetingIndex];
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
}

// Call the changeGreeting function to start changing the text
setInterval(changeGreeting, 500); // Change the text every 0.5 seconds

// Code to handle the mobile menu button click event
// document.addEventListener('DOMContentLoaded', function() {
//   const menuButton = document.getElementById('mobile-menu-button');
//   const menuIcon = document.querySelector('#menu-icon i');
//   const closeIcon = document.querySelector('#close-icon i');

//   menuButton.addEventListener('click', function() {
//       menuIcon.classList.toggle('fa-bars');
//       menuIcon.classList.toggle('fa-xmark');
//   });
// });

// GSAP animation to create the marquee effect
let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap
.to("#marqueePart", {
  x: "-300%",
  duration: 20,
  repeat: -1,
  ease: "linear"
}).totalProgress(0.5);

gsap.set(".marqueeContainer", {xPercent: -50});

window.addEventListener("scroll", function(){
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });

  currentScroll = this.window.pageYOffset;
});

// OVERLAY EFFECT (WELCOME)
gsap.to("#overlay", 2, {
  top: "-120%",
  delay: 2,
  ease: "Expo.easeInOut"
});

// OVERLAY EFFECT (PAGES)
gsap.to("#overlay-page", 2, {
  top: "-120%",
  delay: 0,
  ease: "Expo.easeInOut"
});

// OVERLAY APPEAR ONLY WHEN PAGE IS REFRESHED
document.addEventListener("DOMContentLoaded", function() {
  if (performance.navigation.type === 1) {
    // Page is being loaded for the first time or refreshed
    // Show the overlay
    document.getElementById("overlay").style.display = "flex";
  } else {
    // Page is being navigated to
    // Do not show the overlay
    document.getElementById("overlay").style.display = "none";
  }
});

// OVERLAY APPEAR ONLY WHEN PAGE IS NAVIGATED TO
document.addEventListener("DOMContentLoaded", function() {
  if (performance.navigation.type === 1) {
    // Page is being loaded for the first time or refreshed
    // DO not Show the overlay
    document.getElementById("overlay-page").style.display = "none";
  } else {
    // Page is being navigated to
    // show the overlay
    document.getElementById("overlay-page").style.display = "flex";
  }
});

// UPWARD EFFECT MOVING UP
gsap.from(".up-effect", 1, {
  y: 50,
  delay: 0.6,
  opacity: 0,
  ease: "Expo.easeInOut"
});

// MAGNETIC BUTTON
const magneticButtons = document.querySelectorAll('.magneticButton');

magneticButtons.forEach(magneticButton => {
  magneticButton.addEventListener('mouseenter', function () {
    gsap.to(magneticButton, { duration: 0.3, scale: 1, ease: 'power2.out' });
    document.addEventListener('mousemove', moveButton);
  });

  magneticButton.addEventListener('mouseleave', function () {
    gsap.to(magneticButton, { duration: 0.3, scale: 1, ease: 'power2.out' });
    document.removeEventListener('mousemove', moveButton);
    gsap.to(magneticButton, { duration: 0.3, x: 0, y: 0, ease: 'power2.out' });
  });

  function moveButton(e) {
    const rect = magneticButton.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(magneticButton, { duration: 0.2, x: x, y: y, ease: 'power2.out' });
  }
});

// IMAGE POP UP
const imageContainers = document.querySelectorAll('.hover-text');

imageContainers.forEach(imageContainer => {
  const popUpImage = imageContainer.querySelector('.hover-img');

  imageContainer.addEventListener('mouseenter', function () {
    gsap.to(popUpImage, { duration: 0.6, opacity: 1, scale: 1.1, ease: 'power2.out' });
  });

  imageContainer.addEventListener('mouseleave', function () {
    gsap.to(popUpImage, { duration: 0.6, opacity: 0, scale: 1, ease: 'power2.out' });
  });
});

// SHOWING FOOTER
let mybutton = document.getElementById("footer-sec");

// When the user scrolls down 600px from the top of the document, show the footer
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// SMOOTH SCROLL
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// let smoother = ScrollSmoother.create({
//   wrapper: '#smooth-wrapper',
//   content: '#smooth-content',
//   smooth: 8,
// })