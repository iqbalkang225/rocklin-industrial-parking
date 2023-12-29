import gsap from 'gsap';

import DOMElements from '../DOMElements';
import Utils from '../Utils';

class Header extends DOMElements {
  constructor() {
    super({
      selections: {
        rollingTape: '#rolling-tape',
        storageSign: '#storage-sign',
        rollingTapeContainer: '#rolling-tape-container',
        heroText: '#hero-text',
        heroBtn: '#hero-btn',
        navigation: '#navigation',
        arrow1: '#arrow1',
        arrow2: '#arrow2',
        miles: '#miles',
      },
    });

    this.pageIntro();

    this.rollTape();

    this.utils = new Utils(this.elements.miles, 50, 10, 0, 20, 'down');
  }

  rollTape() {
    const { rollingTape } = this.elements;

    const tl = gsap.timeline({ defaults: { ease: 'none', duration: 30 } });

    tl.to(rollingTape, { xPercent: -100 }).set(rollingTape, { xPercent: 0 }).repeat(-1);
  }

  pageIntro() {
    const { storageSign, heroText, heroBtn, navigation, rollingTapeContainer } = this.elements;

    const tl = gsap.timeline({ defaults: { ease: 'back' } });

    tl.from(storageSign, {
      rotation: -45,
      transformOrigin: 'bottom',
      onComplete: () => {
        this.utils.startCounting();
        this.storageSignArrowAnimation();
      },
    })
      .from(heroText, { y: 100 }, '<')
      .from(heroBtn, { autoAlpha: 0, scale: 0.5, clearProps: 'all' }, '<+0.1')
      .from(navigation.children, { autoAlpha: 0, scale: 0.75 }, '<')
      .from(rollingTapeContainer, { y: 110 });
  }

  storageSignArrowAnimation() {
    const { arrow1, arrow2 } = this.elements;

    const arrowTl = gsap.timeline({ defaults: { repeat: -1, repeatDelay: 2.5 } });

    arrowTl
      .set(arrow1, { y: 0, x: 0 })
      .set(arrow2, { y: 100, x: -100 })
      .to(arrow1, { y: -100, x: 100, ease: 'power4.in' })
      .from(arrow2, { y: 100, x: -100, ease: 'back.out' }, 0.35);
  }
}

export default Header;
