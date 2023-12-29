import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import DOMElements from '../DOMElements';
import Utils from '../Utils';

class Metric extends DOMElements {
  constructor() {
    super({
      selections: {
        metric1: '#metric-1',
        metric2: '#metric-2',
        metric3: '#metric-3',
        metric4: '#metric-4',
      },
    });

    this.startCount();
  }

  startCount() {
    const metrics = Object.values(this.elements);

    metrics.forEach((metric, index) => {
      ScrollTrigger.create({
        trigger: metric,
        onEnter: () => {
          const func = `countMetric${index + 1}`;
          this[func]();
        },
        once: true,
      });
    });
  }

  countMetric1() {
    this.metric1 = new Utils(this.elements.metric1, 50, 10, 100, 80, 'up');
    this.metric1.startCounting();
  }

  countMetric2() {
    this.metric2 = new Utils(this.elements.metric2, 50, 12, 100, 80, 'up');
    this.metric2.startCounting();
  }

  countMetric3() {
    this.metric3 = new Utils(this.elements.metric3, 0, 400, 4, 0, 'up');
    this.metric3.startCounting();
  }

  countMetric4() {
    this.metric4 = new Utils(this.elements.metric4, 0, 300, 5, 0, 'up');
    this.metric4.startCounting();
  }
}

export default Metric;
