import Lenis from '@studio-freight/lenis';

class LenisScroll {
  constructor() {}

  startLenisScroll() {
    const lenis = new Lenis({
      wheelMultiplier: 0.75,
    });

    lenis.on('scroll', (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}

export default LenisScroll;
