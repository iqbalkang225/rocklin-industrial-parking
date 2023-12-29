import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import DOMElements from '../DOMElements';

class Heading extends DOMElements {
  constructor() {
    super({
      selections: {
        headings: '.heading-svg',
      },
    });

    this.animateHeadingSVGs();
  }

  animateHeadingSVGs() {
    const headingSVGs = document.querySelectorAll('.heading-svg');

    headingSVGs.forEach((svg) => {
      svg.innerHTML = this.render();

      ScrollTrigger.create({
        trigger: svg,
        animation: gsap.from(svg.children, { scaleX: 0, stagger: 0.1, transformOrigin: 'left center', ease: 'back' }),
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      });
    });
  }

  render() {
    const html = `
            <svg viewBox="0 0 31 12" class="fill-blackish h-4">
              <path id="Rectangle 8" d="M0 0H25.5759L30.4321 5.8363L25.5759 11.6726H0L4.85619 5.8363L0 0Z" />
            </svg>
            <svg viewBox="0 0 31 12" class="fill-blackish h-4">
              <path id="Rectangle 8" d="M0 0H25.5759L30.4321 5.8363L25.5759 11.6726H0L4.85619 5.8363L0 0Z" />
            </svg>
            <svg viewBox="0 0 31 12" class="fill-blackish h-4">
              <path id="Rectangle 8" d="M0 0H25.5759L30.4321 5.8363L25.5759 11.6726H0L4.85619 5.8363L0 0Z" />
            </svg>
      `;
    return html;
  }
}

export default Heading;
