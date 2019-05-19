// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = function(strs) {
  if (strs == null || strs.length <= 0) {
    return "";
  }

  let lngPx = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    let currWord = strs[i];

    while (
      j < lngPx.length &&
      j < currWord.length &&
      lngPx.charAt(j) === currWord.charAt(j)
    ) {
      j++;
    }

    if (j === 0) {
      return "";
    }

    lngPx = lngPx.slice(0, j);
  }

  return lngPx;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
