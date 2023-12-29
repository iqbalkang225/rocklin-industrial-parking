import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import DOMElements from '../DOMElements';

class Highway extends DOMElements {
  pinAmount = 10000;

  constructor() {
    super({
      selections: {
        svg: '#highways-svg',
        truck1: '#truck1',
        truck2: '#truck2',
        truck3: '#truck3',
        I80: '#i-80',
        CA65: '#ca-65',
        CA99: '#ca-99',
        g1: '#truck-text-1',
        g2: '#truck-text-2',
        g3: '#truck-text-3',
      },
    });

    this.initiateScene();
  }

  initiateScene() {
    const { g1, g2, g3 } = this.elements;

    gsap.set([g1, g2, g3], { yPercent: 100 });

    this.animateTrucks();
    this.animateSVG();
  }

  animateTrucks() {
    const { truck1, truck2, truck3, I80, CA65, CA99 } = this.elements;

    const tl = gsap.timeline();

    tl.to(truck1, { y: -1900 - 733.51, ease: 'none' });
    tl.to(I80, { y: -1900 - 733.51, ease: 'back1.in' }, '<+0.1');
    tl.to(truck2, { y: -1900 - 733.51, ease: 'none' }, '<+0.25');
    tl.to(CA65, { y: -1900 - 733.51, ease: 'back1.in' }, '<+0.1');
    tl.to(truck3, { y: -1900 - 733.51, ease: 'none' }, '<+0.25');
    tl.to(CA99, { y: -1900 - 733.51, ease: 'back1.in' }, '<+0.1');

    ScrollTrigger.create({
      trigger: '#highways-right',
      pin: '#highways-content',
      scrub: 1,
      animation: tl,
      end: this.pinAmount,
    });
  }

  animateSVG() {
    const { svg } = this.elements;

    let mm = gsap.matchMedia();

    const svgAnimationFunc = (distance) => {
      ScrollTrigger.create({
        trigger: '#highways-content',
        scrub: 1,
        animation: gsap.to(svg, { y: -distance, ease: 'none' }),
        end: this.pinAmount,
      });
    };

    mm.add('(min-width: 1024px)', svgAnimationFunc.bind(null, 500));
    mm.add('(max-width: 1024px)', svgAnimationFunc.bind(null, 200));
  }
}

export default Highway;

// const svg = document.querySelector('#highways-svg');
// const truck1 = document.querySelector('#truck1');
// const truck2 = document.querySelector('#truck2');
// const truck3 = document.querySelector('#truck3');
// const I80 = document.querySelector('#i-80');
// const CA65 = document.querySelector('#ca-65');
// const CA99 = document.querySelector('#ca-99');
// const g1 = document.querySelector('#truck-text-1');
// const g2 = document.querySelector('#truck-text-2');
// const g3 = document.querySelector('#truck-text-3');

// gsap.set([g1, g2, g3], { yPercent: 100 });
