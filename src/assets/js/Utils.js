class Utils {
  constructor(element, count, speed) {
    this.element = element;
    this.count = count;
    this.speed = speed;
  }

  startCounting() {
    this.timer();
  }

  timer = () => {
    this.count--;

    miles.innerHTML = this.count;

    if (this.count <= 0) return;

    if (this.count < 20) this.speed = this.speed * 1.25;

    setTimeout(this.timer, this.speed);
  };
}

export default Utils;
