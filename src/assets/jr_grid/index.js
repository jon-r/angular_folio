import { activatePoints, activatePoint } from './points';
import { getRandom } from './utils';
import buildGrid from './grid';
// export default function jrGrid() {
//   activatePoints('#js_gridBox');
// }


export default class JRGrid {

  constructor({
    selector = '#js_gridBox',
    gridLines = 10,
    rectSize = 4, // including 1px pad
    spawnSpeed = 1000, // time per dot spawn
    runSpeed = 40, // time per dot activate the next dot
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
      max: this.config.limit,
      active: 0,
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

const grid = new JRGrid({});

// window.addEventListener('load', grid.begin());
