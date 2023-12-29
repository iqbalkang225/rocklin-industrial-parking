import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import DOMElements from '../DOMElements';

class About extends DOMElements {
  constructor() {
    super({
      selections: {
        aboutImageContainer: '#about-right',
        aboutImage: '#about-right img',
        innerContainer: '#inner-container',
      },
    });
    this.expandImage();
  }

  expandImage() {
    const { aboutImageContainer, innerContainer } = this.elements;

    const tl = gsap.timeline();

    tl.from(aboutImageContainer, { scale: 0, transformOrigin: '0% 0%' }).from(innerContainer, { scale: 4 }, 0);

    ScrollTrigger.create({
      trigger: aboutImageContainer,
      start: 'top 90%',
      end: 'bottom 50%',
      animation: tl,
      scrub: 1,
    });
  }
}

export default About;
