import { randomFrom, addArr } from './utils';

import { cacheGet } from './cache';


const directionTo = {
  u: [0, -1],
  d: [0, 1],
  l: [-1, 0],
  r: [1, 0],
};

const directionFrom = {
  u: 'd',
  d: 'u',
  l: 'r',
  r: 'l',
};

function setDirection(el) {
  const currData = el.dataset;
  const currDirection = currData.direction;
  currData.direction = '';


  const currSpecial = currData.special;
  if (currDirection && currSpecial === 'line') return currDirection;

  const currRoutes = JSON.parse(currData.routes);
  if (currSpecial === 'start' && currDirection) return false;

  const possibleRoutes = currRoutes
  .map((x) => {
    const isReverse = (x === directionFrom[currDirection]);
    return isReverse ? currDirection : x;
  });

  return randomFrom(possibleRoutes);
}


function nextPoint(currEl, obj) {
  const newDirection = setDirection(currEl);

  if (!newDirection) {
    return false;
  }

  const currCoords = currEl.dataset.coords.split(',');
  const offset = directionTo[newDirection];
  const newCoords = addArr(currCoords, offset);

  if (!obj.withinRange(newCoords)) {
    return false;
  }

  const newEl = cacheGet(newCoords.join(','));

  newEl.dataset.direction = newDirection;

  return newEl;
}

export function activatePoint(el, obj) {
  const nextEl = nextPoint(el, obj);

  if (!nextEl) {
    // pointsActive = Math.max(pointsActive - 1, 0);
    obj.remPoint();
    return false;
  }

  requestAnimationFrame(() => {
    el.classList.add('glow');

    setTimeout(() => {
      activatePoint(nextEl, obj);

      el.classList.remove('glow');
    }, obj.config.runSpeed);
  });

  return true;
}

export function activatePoints(grid) {
  const pointsAll = Array.from(grid);
  const pointsStarts = pointsAll.filter(point => point.dataset.special === 'start');

  return {
    all: pointsAll,
    starts: pointsStarts,
  };
}
