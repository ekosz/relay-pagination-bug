export function push(arr, newEntry) {
  return [...arr, newEntry];
}

export function pop(arr) {
  return arr.slice(0, -1);
}

export function shift(arr) {
  return arr.slice(1);
}

export function unshift(arr, newEntry) {
  return [newEntry, ...arr];
}

export function sort(arr, compareFunction) {
  return [...arr].sort(compareFunction);
}

export function reverse(arr) {
  return [...arr].reverse();
}

export function splice(
  arr,
  start,
  deleteCount,
  ...items
) {
  return [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)];
}

export function del(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

export function peek(arr) {
  return arr[arr.length - 1];
}