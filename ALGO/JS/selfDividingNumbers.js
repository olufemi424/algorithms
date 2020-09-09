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
    if (letter === 0 || num % letter !== 0) {
      console.log("not pushed", num);
      return false;
    }
    console.log("pushed");
    return true;
  });
};

console.log(selfDividingNumbers(1, 22));
