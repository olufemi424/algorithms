/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = function(A) {
  let letterMap = new Set();
  for (let elem of A) {
    if (letterMap.has(elem)) {
      return elem;
      break;
    } else {
      letterMap.add(elem, 1);
    }
  }
  return A[A.length - 1];
};

repeatedNTimes([2, 1, 2, 5, 3, 2]);
