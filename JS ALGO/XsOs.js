// check to see if a string has the same number of x's and 0's. the method must return a booleen and be case sensitive

function XO(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xCount++;
    }
    if (str[i].toLowerCase() === "o") {
      oCount++;
    }
  }

  if (xCount === 0 && oCount === 0) {
    return true;
  } else if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}

// console.log(XO("xxoo"));
// console.log(XO("xoxoo"));
// console.log(XO("xXooM"));
// console.log(XO("ZZoo"));
// console.log(XO("zzppp"));
