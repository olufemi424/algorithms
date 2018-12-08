function squareDigits(num) {
  let sqauReresult = "";
  let numStr = num.toString().split("");

  // for (let i = 0; i < numStr.length; i++) {
  //   sqauReresult += Math.pow(Number(numStr[i]), 2);
  // }
  //OR
  for (num of numStr) {
    sqauReresult += Math.pow(Number(num), 2);
  }
  return Number(sqauReresult);
}

// console.log(squareDigits(996));
