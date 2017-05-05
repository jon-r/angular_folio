
const cache = {};

export function cacheAdd(key, value) {
  cache[key] = value;
}

export function cacheGet(key) {
  return cache[key];
}
