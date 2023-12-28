// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './Header';
import LenisScroll from './Lenis';

// gsap.registerPlugin(ScrollTrigger);

// const render = () => {
//   const html = `
//   <svg id='svg' viewBox="0 0 31 12" class="fill-blackish h-4">
//   <path id="Rectangle 8" d="M0 0H25.5759L30.4321 5.8363L25.5759 11.6726H0L4.85619 5.8363L0 0Z" />
//   </svg>
//   <svg id='svg' viewBox="0 0 31 12" class="fill-blackish h-4">
//   <path id="Rectangle 8" d="M0 0H25.5759L30.4321 5.8363L25.5759 11.6726H0L4.85619 5.8363L0 0Z" />
//   </svg>
//   <svg id='svg' viewBox="0 0 31 12" class="fill-blackish h-4">
//   <path id="Rectangle 8" d="M0 0H25.5759L30.4321 5.8363L25.5759 11.6726H0L4.85619 5.8363L0 0Z" />
//   </svg>

//   `;

//   const headingSVGs = document.querySelectorAll('.heading-svg');
//   headingSVGs.forEach((svg) => {
//     svg.innerHTML = html;

//     ScrollTrigger.create({
//       trigger: svg,
//       animation: gsap.from(svg.children, { scaleX: 0, stagger: 0.1, transformOrigin: 'left center', ease: 'back' }),
//       start: 'top 80%',
//       toggleActions: 'play none none reverse',
//     });
//   });
// };

// render();

// ScrollTrigger.create({
//   trigger: '#features',
//   animation: gsap.to('[data-feature-divider]', { y: 200, stagger: 0.5, duration: 1, ease: 'none' }),
//   start: 'top 40%',
//   // markers: true,
//   end: 'bottom bottom',
//   scrub: 0.5,
//   ease: 'none',
// });

// // create
// let mm = gsap.matchMedia();

// // add a media query. When it matches, the associated function will run
// mm.add('(min-width: 768px)', () => {
//   // this setup code only runs when viewport is at least 800px wide
//   ScrollTrigger.create({
//     trigger: '#features-heading',
//     pin: true,
//     start: 'top 80%',
//     end: () => `${document.querySelector('#features-right').offsetHeight} bottom`,
//     // pinSpacing: false,
//     markers: true,
//     // scrub: 0.5,
//     // ease: 'none',
//   });

//   // return () => {
//   //   // optional
//   //   // custom cleanup code here (runs when it STOPS matching)
//   // };
// });

// // later, if we need to revert all the animations/ScrollTriggers...
// // mm.revert();

// ////////////////

// // const svg = document.querySelector('#highways-svg');
// // const truck1 = document.querySelector('#truck1');
// // const truck2 = document.querySelector('#truck2');
// // const truck3 = document.querySelector('#truck3');
// // const I80 = document.querySelector('#i-80');
// // const CA65 = document.querySelector('#ca-65');
// // const CA99 = document.querySelector('#ca-99');
// // const g1 = document.querySelector('#truck-text-1');
// // const g2 = document.querySelector('#truck-text-2');
// // const g3 = document.querySelector('#truck-text-3');

// // gsap.set([g1, g2, g3], { yPercent: 100 });

// // const highwayTl = gsap.timeline();

// // highwayTl.to(truck1, { y: -1900 - 733.51, ease: 'none' });
// // highwayTl.to(I80, { y: -1900 - 733.51, ease: 'back1.in' }, '<+0.1');
// // highwayTl.to(truck2, { y: -1900 - 733.51, ease: 'none' });
// // highwayTl.to(CA65, { y: -1900 - 733.51, ease: 'back1.in' }, '<+0.1');
// // highwayTl.to(truck3, { y: -1900 - 733.51, ease: 'none' });
// // highwayTl.to(CA99, { y: -1900 - 733.51, ease: 'back1.in' }, '<+0.1');

// // ScrollTrigger.create({
// //   trigger: '#highways-content',
// //   markers: true,
// //   pin: true,
// //   scrub: 1,
// //   animation: highwayTl,
// //   end: 5700,
// // });

// // ScrollTrigger.create({
// //   trigger: '#highways-content',
// //   scrub: 1,
// //   animation: gsap.to(svg, { y: -500, ease: 'none' }),
// //   end: 5700,
// // });

// // loading animation

// const metric1 = document.querySelector('#metric-1');

// var metricCount = 50;
// var metricSpeed = 10;

// metricTimer();

// function metricTimer() {
//   metricCount++;

//   metric1.innerHTML = metricCount + '+'; // watch for      spelling

//   if (metricCount >= 100) {
//     return;
//   }

//   if (metricCount > 80) metricSpeed = metricSpeed * 1.25;
//   setTimeout(metricTimer, metricSpeed);
// }

class App {
  constructor() {
    this.startSmoothScrolling();
    this.loadSections();
  }

  startSmoothScrolling() {
    const lenis = new LenisScroll();
    lenis.startLenisScroll();
  }

  loadSections() {
    const header = new Header();
  }
}

const app = new App();
