class Utils {
  constructor(element, count, speed, limit, threshold, direction) {
    this.element = element;
    this.count = count;
    this.speed = speed;
    this.direction = direction;
    this.threshold = threshold;
    this.limit = limit;
  }

  startCounting() {
    if (this.direction === 'up') this.countUp();
    else this.countDown();
  }

  countDown = () => {
    this.count--;

    this.element.innerHTML = this.count;

    if (this.count <= this.limit) return;

    if (this.count < this.threshold) this.speed = this.speed * 1.25;

    setTimeout(this.countDown, this.speed);
  };

  countUp = () => {
    this.count++;

    this.element.innerHTML = this.count;

    if (this.count >= this.limit) return;

    if (this.count > this.threshold) this.speed = this.speed * 1.25;

    setTimeout(this.countUp, this.speed);
  };
}

export default Utils;
