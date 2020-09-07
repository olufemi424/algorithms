const isValid = function(s) {
  if (s.length === 0) return true;
  if (s.length % 2 !== 0) return false;

  let stack = [];
  let matchingOpeningBracket, ch;
  let openingBrackets = ["[", "{", "("];
  let closingBrackets = ["]", "}", ")"];

  for (let i = 0; i < s.length; i++) {
    ch = s[i];

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
      if (stack.length === 0 || stack.pop() != matchingOpeningBracket) {
        return false;
      }
    } else {
      stack.push(ch);
      // console.log(stack);
    }
  }

  return stack.length === 0;
};

console.log(isValid("(((())"));
