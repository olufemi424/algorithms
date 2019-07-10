var selfDividingNumbers = function(left, right) {
  let output = [];
  for (let i = left; i <= right; i++) {
    if (checkIfDivisible(i)) {
      output.push(i);
    }
  }
  return output;
};

const checkIfDivisible = num => {
  const strNumArr = num.toString().split("");

  return strNumArr.every(letter => {
    console.log(num, letter);
    if (letter === 0 || num % letter !== 0) {
      return false;
    }
    return true;
  });
};

// checkIfDivisible(1)

console.log(selfDividingNumbers(1, 22));
