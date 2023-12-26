import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rollingTape = document.querySelector('#rolling-tape');

const tl = gsap.timeline({ defaults: { ease: 'none', duration: 30 } });

tl.to(rollingTape, { xPercent: -100 }).set(rollingTape, { xPercent: 0 }).repeat(-1);

// const headingArrows = document.querySelectorAll('.heading-arrow');
const headingArrows = document.querySelector('#heading-arrows');

const tl1 = gsap.timeline();

// tl1
//   .from(headingArrows.children, { scaleX: 0, stagger: 0.1, transformOrigin: 'left center', duration: 0.2 })
//   .to(headingArrows.children, { scaleX: 0, transformOrigin: 'left center', stagger: -0.1, duration: 0.2 })
//   .to(headingArrows.children, { scaleX: 1, ease: 'back', stagger: 0.1 });

gsap.from(headingArrows.children, { scaleX: 0, stagger: 0.1, transformOrigin: 'left center', ease: 'back' });

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
  <svg id='svg' width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Rectangle 8" d="M0 0H25.5759L30.4321 5.8363L25.5759 11.6726H0L4.85619 5.8363L0 0Z" fill="#252627"/>
  </svg>
  
  `;

  const tt = document.querySelectorAll('#headings');
  tt.forEach((t) => {
    t.innerHTML = html;
  });
};

render();

ScrollTrigger.create({
  trigger: '#about',
  markers: true,
  animation: gsap.from('#svg', { autoAlpha: 0 }),
  start: 'top 50%',
});

ScrollTrigger.create({
  trigger: '#len',
  markers: true,
  animation: gsap.from('#svg', { autoAlpha: 0 }),
  start: 'top 50%',
});
