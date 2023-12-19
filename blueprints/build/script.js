// JavaScript code to change the text dynamically
const greetings = ["Hello", "Jambo", "Ciao", "Bonjour", "Привет ", "नमस्ते "];
let currentGreetingIndex = 0;
const h1Element = document.querySelector('#greeting');

function changeGreeting() {
  h1Element.textContent = greetings[currentGreetingIndex];
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
}

// Call the changeGreeting function to start changing the text
setInterval(changeGreeting, 500); // Change the text every 0.5 seconds

// Code to handle the mobile menu button click event
const menuButton = document.getElementById('mobile-menu-button');
const menuIcon = document.querySelector('#menu-icon i');
const closeIcon = document.querySelector('#close-icon i');

menuButton.addEventListener('click', function() {
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
});

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

