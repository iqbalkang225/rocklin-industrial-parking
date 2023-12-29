import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

import DOMElements from '../DOMElements';

class Navigation extends DOMElements {
  animation = null;

  constructor() {
    super({
      selections: {
        links: '.link',
        lines: '[data-line]',
      },
    });

    this.scrollToSection();
  }

  scrollToSection() {
    this.elements.links.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const href = e.target.getAttribute('href');

        gsap.to(window, { scrollTo: href });
      });

      link.addEventListener('mouseenter', (e) => {
        gsap.set(this.elements.lines[index], { transformOrigin: 'left' });

        this.animation = gsap.to(this.elements.lines[index], { scaleX: 1, ease: 'power4' });
      });

      link.addEventListener('mouseleave', (e) => {
        gsap.set(this.elements.lines[index], { transformOrigin: 'right' });

        gsap.to(this.elements.lines[index], { scaleX: 0, ease: 'power4' });
      });
    });
  }
}

export default Navigation;
