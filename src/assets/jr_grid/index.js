import { activatePoints, activatePoint } from './points';
import { getRandom } from './utils';
import buildGrid from './grid';
// export default function jrGrid() {
//   activatePoints('#js_gridBox');
// }


export default class JRGrid {

  constructor({
    selector = '#js_gridBox',
    gridLines = 6,
    rectSize = 5, // including 1px pad
    spawnSpeed = 500, // time per dot spawn
    runSpeed = 60, // time per dot activate the next dot
    limit = 10, // number of active lines
  }) {
    this.config = {
      frame: document.querySelector(selector),
      gridLines,
      rectSize,
      spawnSpeed,
      runSpeed,
      limit,
    };

    this.config.frame.addEventListener('click', e => this.manualActivate(e), true);

    const grid = buildGrid(this.config);

    this.grid = grid.points;
    this.gridRange = grid.max;

    this.setRange({ from: [0, 0], to: [1, 1] });

    this.points = activatePoints(grid.points);

    this.counter = {
      max: 1,
      active: 0,
    };

    this.framerateTest = {
      sum: 0,
      counter: 0,
      safeCap: 30, // min 30fps target
    };
  }

  manualActivate(e) {
    const target = e.target;

    if (!target.dataset.routes) {
      return false;
    }

    activatePoint(target, this);
    return true;
  }


  begin() {
    const points = this.points;
    if (!this.points.starts) return false;

    const starts = points.starts;
    const startCount = starts.length;

    this.checkFrameRate();

    setInterval(() => {
    // setTimeout(() => {
      if (this.checkPoints()) {
        const rng = getRandom(startCount);

        activatePoint(starts[rng], this);

        this.addPoint();
      }
    }, this.config.spawnSpeed);
    return true;
  }

  start() {
    this.counter.max = this.config.limit;
  }

  pause() {
    this.counter.max = 0;
  }

  setRange({ from, to }) {
    this.range = this.gridRange.map((total, j) => ({
      min: from[j] * total,
      max: to[j] * total,
    }));
  }

  withinRange(coords) {
    return coords.every((coord, i) => {
      const range = this.range[i];
      return (coord < range.max && coord > range.min);
    });
  }

  checkFrameRate() {
    const rate = this.framerateTest;

    const start = Date.now();

    requestAnimationFrame(() => {
      rate.counter += 1;

      const end = Date.now();
      rate.sum += (end - start);

      if (rate.counter === 300) {
        const fps = (3e5 / rate.sum); // 300 frames * 1000ms

        rate.counter = 0;
        rate.sum = 0;

        if ((fps < 30) && (this.counter.max > 1)) {
          this.counter.max -= 1;
        } else if ((fps > 45) && (this.counter.max < this.config.limit)) {
          this.counter.max += 1;
        }
      }
      this.checkFrameRate();
    });
  }

  checkPoints() {
    return (this.counter.active < this.counter.max);
  }

  addPoint() {
    this.counter.active += 1;
  }

  remPoint() {
    this.counter.active = Math.max(this.counter.active - 1, 0);
  }
}
