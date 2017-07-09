
const cache = new Map();

export function cacheAdd(key, value) {
  cache.set(key, value);
}

export function cacheGet(key) {
  return cache.get(key);
}
