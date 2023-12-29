import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import DOMElements from '../DOMElements';

class Footer extends DOMElements {
  constructor() {
    super({
      selections: {
        relativeSVG: '#relative-svg',
        absoluteSVG: '#absolute-svg',
        SVGContainer: '#svg-container',
      },
    });
    this.footerSVGAnimation();
  }

  footerSVGAnimation() {
    const { absoluteSVG, relativeSVG, SVGContainer } = this.elements;

    const tl = gsap.timeline();

    tl.set(relativeSVG, { xPercent: 0, x: 0 })
      .set(absoluteSVG, { xPercent: -100 })
      .to(relativeSVG, { xPercent: 100, ease: 'power4.in' })
      .from(absoluteSVG, { xPercent: -100, ease: 'back.out' }, 0.35);

    ScrollTrigger.create({
      trigger: SVGContainer,
      animation: tl,
      onEnter: () => tl.play(0),
    });
  }
}

export default Footer;
