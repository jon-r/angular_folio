import opts from './config';
import { getRandom, randomFrom, addArr } from './utils';
import buildGrid from './grid';
import { cacheGet } from './cache';


let pointsActive = 0;

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
  // .filter(x => x !== directionFrom[currDirection]);
  .map((x) => {
    if (x === directionFrom[currDirection]) {
      return currDirection;
    }
    return x;
  });

  return randomFrom(possibleRoutes);
}


function nextPoint(currEl) {
  const newDirection = setDirection(currEl);
  if (!newDirection) {
    return false;
  }

  const currCoords = currEl.dataset.coords.split(',');
  const offset = directionTo[newDirection];
  const newCoords = addArr(currCoords, offset).join(',');
  const newEl = cacheGet(newCoords);

  newEl.dataset.direction = newDirection;

  return newEl;
}

function activatePoint(el) {
  requestAnimationFrame(() => {
    const nextEl = nextPoint(el);

    if (!nextEl) {
      pointsActive = Math.max(pointsActive - 1, 0);
      return false;
    }

    el.classList.add('glow');

    setTimeout(() => {
      activatePoint(nextEl);
      el.classList.remove('glow');
    }, opts.runSpeed);

    return true;
  });
}

function manualActivate(e) {
  const target = e.target;

  if (!target.dataset.routes) {
    return false;
  }

  activatePoint(target);
  return true;
}

export default function activatePoints(targetEl) {
  const pointsAll = Array.from(buildGrid(targetEl));
  const pointsStarts = pointsAll.filter(point => point.dataset.special === 'start');
  const pointsStartCount = pointsStarts.length;

  pointsAll[0].parentElement.addEventListener('click', manualActivate, true);

  return setInterval(() => {
  // return setTimeout(() => {
    if (pointsActive < opts.limit) {
      const rng = getRandom(pointsStartCount);

      if (pointsStarts) activatePoint(pointsStarts[rng], false);
      pointsActive += 1;
    }
  }, opts.spawnSpeed);
}
