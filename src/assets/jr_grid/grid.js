import { setAttrs, isFactor, isFactorFilter } from './utils';
import { cacheAdd } from './cache';
import opts from './config';

function pointIs(filter, el) {
  const routes = JSON.parse(el.dataset.routes);
  const routeCount = routes.length;

  const out = {
    direction: routes[0],
    line: routeCount === 2,
    start: routeCount === 1,
  };

  return out[filter];
}

function setGridRoutes(coords, gridCount) {
  const x = coords[0];
  const y = coords[1];
  const grid = opts.gridLines;

  const isHoriz = isFactor(y, grid);
  const isVert = isFactor(x, grid);

  const out = [];

  if (isVert && y > 0) out.push('u');
  if (isVert && y < gridCount.height - 1) out.push('d');
  if (isHoriz && x > 0) out.push('l');
  if (isHoriz && x < gridCount.width - 1) out.push('r');

  // TODO: add 'specials' (eg linear, start to filter in advance);

  return JSON.stringify(out);
}

function setSpecial(rect) {
  if (pointIs('line', rect)) {
    return 'line';
  }
  if (pointIs('start', rect)) {
    return 'start';
  }
  return false;
}

function getRect(arr, gridCount) {
  const presetRect = setAttrs(document.createElementNS('http://www.w3.org/2000/svg', 'rect'), {
    height: opts.rectSize - 1,
    width: opts.rectSize - 1,
    class: 'grid-rect',
  });


  return setAttrs(presetRect.cloneNode(), {
    x: arr[0] * opts.rectSize,
    y: arr[1] * opts.rectSize,
    'data-routes': setGridRoutes(arr, gridCount),
    'data-coords': arr.join(','),
  });
}

export default function buildGrid(targetEl) {
  const container = document.querySelector(targetEl);
  const containerSize = container.getBBox();

  const gridCount = {
    width: Math.ceil(containerSize.width / opts.rectSize),
    height: Math.ceil(containerSize.height / opts.rectSize),
  };

  const gridX = new Array(gridCount.width).fill();
  const gridY = new Array(gridCount.height).fill();

  const points = [];

  gridX.forEach((_, x) => {
    gridY.forEach((__, y) => {
      const coords = [x, y];

      if (coords.some(isFactorFilter, opts.gridLines)) {
        const rect = getRect(coords, gridCount);
        rect.dataset.special = setSpecial(rect);
        cacheAdd(coords.join(','), rect);
        container.appendChild(rect);
        points.push(rect);
      }
    });
  });

  return points;
}
