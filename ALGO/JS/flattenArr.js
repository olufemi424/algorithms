function flattenArr(arr) {
  // return arr.reduce((a, b) => a.concat(b));

  // OR

  return [].concat.apply([], arr);
}

// console.log(flattenArr([[1, 2], [3, 4], [5, 6], [7, 8], [9, 0]]));

// const a = [1, 2];
// const b = [3, 4];
// const c = a.concat(b);
// console.log(c);
