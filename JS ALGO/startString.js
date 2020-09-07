/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  var max = haystack.length - 1 - (needle.length - 1);
  for (var i = 0; i <= max; i++) {
    // try match needle
    var matched = true;
    for (var j = 0; j < needle.length; j++) {
      if (needle[j] != haystack[i + j]) {
        matched = false;
        break;
      }
    }
    if (matched) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
