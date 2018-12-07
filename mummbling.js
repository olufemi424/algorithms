function funckyCap(letter, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      result += letter.toUpperCase();
    } else {
      result += letter.toLowerCase();
    }
    //OR
    // result += i === 0 ? letter.toUpperCase() : letter.toLowerCase();
  }
  return result;
}

function accum(str) {
  let result = [];
  letters = str.split("");
  count = 1;
  for (let letter of letters) {
    result.push(funckyCap(letter, count));
    count++;
  }
  return result.join("-");
}

// console.log(accum("cWAt"));
