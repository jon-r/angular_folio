import { setAttrs, isFactor, isFactorFilter } from './utils';
import { cacheAdd } from './cache';

function setGridRoutes(coords, gridCount, grid) {
  const [x, y] = coords;
  // const y = coords[1];

  const isHoriz = isFactor(y, grid);
  const isVert = isFactor(x, grid);

  const out = [];

  if (isVert && y > 0) out.push('u');
  if (isVert && y < gridCount.height - 1) out.push('d');
  if (isHoriz && x > 0) out.push('l');
  if (isHoriz && x < gridCount.width - 1) out.push('r');

  return out;
}

function setSpecial(routes) {
  const specials = {
    1: 'start',
    2: 'line',
  };

  return specials[routes.length] || false;
}

function getRect({ coords, presetRect, rectSize }) {
  const [x, y] = coords;

  return setAttrs(presetRect.cloneNode(), {
    x: x * rectSize,
    y: y * rectSize,
  });
}

export default function buildGrid(config) {
  const containerSize = config.frame.getBBox();
  const rectSize = config.rectSize;

  const gridCount = {
    width: Math.ceil(containerSize.width / rectSize),
    height: Math.ceil(containerSize.height / rectSize),
  };

  const grid = {
    x: new Array(gridCount.width).fill(),
    y: new Array(gridCount.height).fill(),
  };

  const points = [];

  const presetRect = setAttrs(document.createElementNS('http://www.w3.org/2000/svg', 'rect'), {
    height: rectSize - 1,
    width: rectSize - 1,
    class: 'grid-rect',
  });

  grid.x.forEach((_, x) => {
    grid.y.forEach((__, y) => {
      const coords = [x, y];

      if (coords.some(isFactorFilter, config.gridLines)) {
        const rect = getRect({ coords, presetRect, rectSize });

        const routes = setGridRoutes(coords, gridCount, config.gridLines);
        const coordsStr = coords.join(',');

        rect.dataset.routes = JSON.stringify(routes);
        rect.dataset.special = setSpecial(routes);
        rect.dataset.coords = coordsStr;

        cacheAdd(coordsStr, rect);
        config.frame.appendChild(rect);
        points.push(rect);
      }
    });
  });


  return {
    points,
    max: [grid.x.length, grid.y.length],
  };
}
