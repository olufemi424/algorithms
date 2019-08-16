/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 *
 * Given two integers x and y, calculate the Hamming distance.
 *
 * Note:        0 ≤ x, y < 2^31.
 *
 * Example:
 *              Input:  x = 1, y = 4
 *              Output: 2
 *
 * Explanation:
 *              1   (0 0 0 1)
 *              4   (0 1 0 0)
 *                     ↑   ↑
 *
 * The above arrows point to positions where the corresponding bits are different.
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const hammingDistance = function(x, y) {
  let result = 0;
  let strX = x.toString(2),
    strY = y.toString(2);

  //find the greatest
  if (strX.length >= strY.length) {
    result = bitChecker(strX, strY);
  } else if (strY.length > strX.length) {
    result = bitChecker(strY, strX);
  }

  console.log(result);
  return result;
};

function bitChecker(bg, sm) {
  let add0 = "",
    result = 0;
  const diff = bg.length - sm.length;
  console.log("diff", diff);

  for (let i = 0; i < diff; i++) add0 += "0";
  console.log(add0, "add0");
  console.log(bg, sm);
  let newSm = add0 + sm;

  for (let j = 0; j < bg.length; j++) {
    bg.charAt(j) != newSm.charAt(j) ? result++ : null;
  }

  return result;
}

hammingDistance(1, 4);
