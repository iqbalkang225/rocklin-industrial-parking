import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

class LenisScroll {
  constructor() {}

  startLenisScroll() {
    const lenis = new Lenis({
      wheelMultiplier: 0.75,
    });

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}

export default LenisScroll;
