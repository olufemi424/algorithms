// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const romanToInt = function(s) {
  let result = 0;
  let char, j;

  for (let i = 0; i < s.length; i++) {
    char = s[i];
    j = i + 1;

    switch (char) {
      case "I": // value I
        if (j < s.length && (s[j] === "V" || s[j] === "X")) {
          result -= 1;
        } else {
          result += 1;
        }
        break;
      case "V": // value 5
        result += 5;
        break;
      case "X": // value 10
        if (j < s.length && (s[j] == "L" || s[j] == "C")) result -= 10;
        else {
          result += 10;
        }
        break;
      case "L": // value 50
        result += 50;
        break;
      case "C": // value 10
        if (j < s.length && (s[j] == "D" || s[j] == "M")) result -= 100;
        else {
          result += 100;
        }
        break;
      case "D": // value 50
        result += 500;
        break;
      case "M": // value 50
        result += 1000;
        break;
    }
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
