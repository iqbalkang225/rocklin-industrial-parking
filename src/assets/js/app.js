import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rollingTape = document.querySelector('#rolling-tape');

const tl = gsap.timeline({ defaults: { ease: 'none', duration: 30 } });

tl.to(rollingTape, { xPercent: -100 }).set(rollingTape, { xPercent: 0 }).repeat(-1);

// const headingArrows = document.querySelectorAll('.heading-arrow');
// const headingArrows = document.querySelector('#heading-arrows');

// const tl1 = gsap.timeline();

// tl1
//   .from(headingArrows.children, { scaleX: 0, stagger: 0.1, transformOrigin: 'left center', duration: 0.2 })
//   .to(headingArrows.children, { scaleX: 0, transformOrigin: 'left center', stagger: -0.1, duration: 0.2 })
//   .to(headingArrows.children, { scaleX: 1, ease: 'back', stagger: 0.1 });

// gsap.from(headingArrows.children, { scaleX: 0, stagger: 0.1, transformOrigin: 'left center', ease: 'back' });

import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  wheelMultiplier: 0.5,
});

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const render = () => {
  const html = `
  <svg id='svg' viewBox="0 0 31 12" class="fill-blackish h-4">
  <path id="Rectangle 8" d="M0 0H25.5759L30.4321 5.8363L25.5759 11.6726H0L4.85619 5.8363L0 0Z" />
  </svg>
  <svg id='svg' viewBox="0 0 31 12" class="fill-blackish h-4">
  <path id="Rectangle 8" d="M0 0H25.5759L30.4321 5.8363L25.5759 11.6726H0L4.85619 5.8363L0 0Z" />
  </svg>
  <svg id='svg' viewBox="0 0 31 12" class="fill-blackish h-4">
  <path id="Rectangle 8" d="M0 0H25.5759L30.4321 5.8363L25.5759 11.6726H0L4.85619 5.8363L0 0Z" />
  </svg>
  
  `;

  const headingSVGs = document.querySelectorAll('.heading-svg');
  headingSVGs.forEach((svg) => {
    svg.innerHTML = html;

    ScrollTrigger.create({
      trigger: svg,
      animation: gsap.from(svg.children, { scaleX: 0, stagger: 0.1, transformOrigin: 'left center', ease: 'back' }),
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    });
  });
};

render();

ScrollTrigger.create({
  trigger: '#features',
  animation: gsap.to('[data-feature-divider]', { y: 200, stagger: 0.5, duration: 1, ease: 'none' }),
  start: 'top 40%',
  markers: true,
  end: 'bottom bottom',
  scrub: 0.5,
  ease: 'none',
});

ScrollTrigger.create({
  trigger: '#features-heading',
  pin: true,
  start: 'top 80%',
  end: 'bottom bottom',
  pinSpacing: false,
  // scrub: 0.5,
  // ease: 'none',
});

const miles = document.querySelector('#miles');

var count = 50;
var speed = 10;

timer();

function timer() {
  count--;

  miles.innerHTML = count; // watch for      spelling

  if (count <= 0) {
    return;
  }

  if (count < 20) speed = speed * 1.25;
  setTimeout(timer, speed);
}
