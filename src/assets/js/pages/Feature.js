import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import DOMElements from '../DOMElements';

class Feature extends DOMElements {
  constructor() {
    super({
      selections: {
        features: '#features',
        featuresHeading: '#features-heading',
        featuresRight: '#features-right',
        featureDivider: '[data-feature-divider]',
      },
    });

    this.animateDivider();
    this.pinHeading();
  }

  animateDivider() {
    const { features, featureDivider } = this.elements;

    gsap.to(featureDivider, {
      y: 200,
      stagger: 0.5,
      duration: 0.85,
      ease: 'none',
      scrollTrigger: {
        trigger: features,
        start: 'top 40%',
        end: 'bottom 80%',
        scrub: 0.5,
        ease: 'none',
      },
    });
  }

  pinHeading() {
    const { featuresHeading, featuresRight } = this.elements;

    let mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: featuresHeading,
        pin: true,
        start: 'top 80%',
        end: () => `${featuresRight.offsetHeight} bottom`,
      });
    });
  }
}

export default Feature;
