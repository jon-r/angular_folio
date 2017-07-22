// import { debounce } from 'lodash';

import GridRect from './rect';

import { isFactorFilter, randomFrom } from './utils';

export class CanvasGrid {

  target;
  ctx;
  config;
  grid;
  counter;
  activePoints;
  gridStarters;
  isPaused;

  constructor({
    target = 'jsGridCanvas',
    rectHeight = 6,
    rectWidth = 6,
    color = '#fff',
    gridSpacing = 12,
    limit = 5,
  }) {
    this.target = document.getElementById(target);

    this.ctx = this.target.getContext('2d');

    this.config = {
      rectHeight,
      rectWidth,
      color,
      gridSpacing,
      limit,
    };

    this.grid = new Map();
    this.counter = 0;

    this.activePoints = [];
    this.gridStarters = [];

    this.isPaused = true;

    // window.addEventListener('resize', debounce(() => this.build(), 500));
  }

  getContainer() {
    const target = this.target;
    const cfg = this.config;

    target.height = target.parentElement.offsetHeight;
    target.width = target.parentElement.offsetWidth;

    // this.grid.forEach(rect => rect.rect.drawRect(0.05));

    return {
      rows: Math.ceil(target.height / cfg.rectHeight),
      cols: Math.ceil(target.width / cfg.rectWidth),
    };
  }

  build() {
    const container = this.getContainer();
    const cfg = this.config;

    const rows = new Array(container.rows).fill(0);
    const cols = new Array(container.cols).fill(0);
    const grid = this.grid;

    cols.forEach((i, x) => {
      rows.forEach((j, y) => {
        const coords = [x, y];

        if (coords.some(isFactorFilter, cfg.gridSpacing)) {
          const newRect = new GridRect(this.ctx, cfg, coords);
          grid.set(newRect.id, newRect);
        }
      });
    });

    // todo : update this in the main snake file (reseting the starter, reomving the resize event watch, play IF not already playing)
    /* todo : jrgrid bug on resizing. getNext id of undefined? prob targeting a rect that disappears onresize. check if it exists  */
    this.gridStarters = [];

    grid.forEach((rect) => {
      rect.drawRect(0.1).setCanTrigger(grid, cfg, container);
      if (rect.canTrigger.length === 1) {
        this.gridStarters.push(rect);
      }
    });

    return this;
  }

  play() {
    if (this.isPaused) {
      this.isPaused = false;
      this.maintainPoints();
      this.updateGrid();
    }
  }

  maintainPoints() {
    const newRect = randomFrom(this.gridStarters);

    this.activePoints = this.activePoints.filter(rect => rect.isActive);

    if (this.counter < this.config.limit) {
      newRect.trigger();

      this.activePoints.push(newRect);
      this.counter += 1;
    }

    if (!this.isPaused) {
      setTimeout(() => this.maintainPoints(), 1000);
    }
  }

  updateGrid(n = 0) {
    let m = n + 1 || 0;

    const active = this.activePoints;

    if (m === 3) {
      m = 0;

      active.forEach((rect) => {
        rect.draw();

        if (rect.isNew) {
          const next = rect.getNext();

          if (next) {
            active.push(next);
          } else {
            this.counter -= 1;
          }
        }
      });
    }

    // if (m === 1) {
    //   m = 1;
    //
    // }

    if (!this.isPaused) {
      requestAnimationFrame(() => this.updateGrid(m));
    }
    return true;
  }

  pause() {
    this.isPaused = true;
  }
}
