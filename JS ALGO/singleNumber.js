var singleNumber = function(nums) {
  const d = {};

  for (num of nums) {
    if (!d[num]) {
      d[num] = 1;
    } else {
      d[num] += 1;
    }
  }

  // console.log(d)

  for (key in d) {
    //  console.log(key)
    if (d[key] === 1) {
      return key;
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
