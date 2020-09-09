function removeOuterParentheses(S) {
  let ret = "";
  const stack = [];
  for (let i in S) {
    if (S[i] == "(") {
      if (stack.length >= 1) {
        ret += S[i];
      }
      stack.push("(");
    } else if (S[i] == ")") {
      if (stack.length > 1) {
        ret += S[i];
      }
      stack.pop();
    }
  }
  return ret;
}

console.log(removeOuterParentheses("(()())(())"));
