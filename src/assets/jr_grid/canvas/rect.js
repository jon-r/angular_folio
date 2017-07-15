import { isFactor, biasedRNG } from '../utils';


export default class GridRect {

  constructor(ctx, cfg, coords) {
    this.ctx = ctx;

    this.dims = [
      cfg.rectWidth * coords[0],  // x
      cfg.rectHeight * coords[1], // y
      cfg.rectWidth, // width
      cfg.rectHeight, // height
    ];

    this.coords = coords;
    this.id = coords.join(',');

    this.color = cfg.color;

    this.alpha = 0.1;
    this.isNew = false;
    this.isActive = false;

    this.triggeredBy = false;
    this.canTrigger = [];
  }

  drawRect(alpha) {
    const ctx = this.ctx;
    // TODO future - make this variable. for now static to match the portfolio
    const color = `rgba(13,78,72,${alpha})`;
    ctx.clearRect(...this.dims);
    ctx.fillStyle = color;
    ctx.fillRect(...this.dims);

    return this;
  }

  draw() {
    const alpha = Math.max(this.alpha - 0.02, 0.1);

    if (alpha > 0.1) {
      this.drawRect(alpha);
    } else {
      this.isActive = false;
    }

    this.alpha = alpha;
    return this;
  }

  setCanTrigger(grid, cfg, container) {
    const [x, y] = this.coords;
    // const y = coords[1];

    const isHoriz = isFactor(y, cfg.gridSpacing);
    const isVert = isFactor(x, cfg.gridSpacing);

    const out = [];

    // the order of these is important (goes clockwise);
    // go up
    if (isVert && y > 0) out.push(grid.get(`${x},${y - 1}`));
    // go left
    if (isHoriz && x > 0) out.push(grid.get(`${x - 1},${y}`));
    // go down
    if (isVert && y < container.rows - 1) out.push(grid.get(`${x},${y + 1}`));
    // go right
    if (isHoriz && x < container.cols - 1) out.push(grid.get(`${x + 1},${y}`));

    this.canTrigger = out;
  }

  trigger(triggeredBy = false) {
    this.triggeredBy = triggeredBy;
    this.alpha = 1;
    this.isNew = true;
    this.isActive = true;
  }

  getNext() {
    this.isNew = false;

    const validTargets = this.canTrigger.filter(rect => rect.id !== this.triggeredBy);
    const possible = validTargets.length;
    let newTarget;

    switch (true) {
    case (possible > 1):
      // prioritise going straight ahead
      // (array[1] is the middle and always opposite of three points)
      newTarget = biasedRNG(validTargets, 1, 4);
      break;
    case (possible === 1):
      newTarget = validTargets[0];
      break;
    default: // no possible targets
      return false;
    }

    if (newTarget.isActive) return false;

    newTarget.trigger(this.id);
    return newTarget;
  }
}
