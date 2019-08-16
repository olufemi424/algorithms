// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]

// Input: "IDID"
// Output: [0,4,1,3,2]

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let low = 0;
  let high = S.length;
  const result = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "I") {
      result.push(low);
      low++;
    } else {
      result.push(high);
      high--;
    }
  }

  return result;
};
