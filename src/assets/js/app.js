import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './pages/Header';
import LenisScroll from './Lenis';
import Feature from './pages/Feature';
import Metric from './pages/Metric';
import Heading from './components.js/Heading';
import Footer from './pages/Footer';
import Navigation from './components.js/Navigation';
import Highway from './pages/Highway';

gsap.registerPlugin(ScrollTrigger);

// ////////////////

class App {
  constructor() {
    this.startSmoothScrolling();
    this.loadSections();
    this.generateHeadingSVGs();
    this.navLinksClick();
  }

  startSmoothScrolling() {
    const lenis = new LenisScroll();
    lenis.startLenisScroll();
  }

  loadSections() {
    const header = new Header();
    const feature = new Feature();
    const metric = new Metric();
    const highway = new Highway();
    const footer = new Footer();
  }

  generateHeadingSVGs() {
    const headingSVGs = new Heading();
  }

  navLinksClick() {
    const nav = new Navigation();
  }
}

const app = new App();
