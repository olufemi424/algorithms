var singleNumber = function(nums) {
  //   const d = {};
  //   for (num of nums) {
  //     if (!d[num]) {
  //       d[num] = 1;
  //     } else {
  //       d[num] += 1;
  //     }
  //   }
  //   // console.log(d)
  //   for (key in d) {
  //     //  console.log(key)
  //     if (d[key] === 1) {
  //       return key;
  //     }
  //   }

  //since every item appears twice, and the set only keeps a copy of the items in the array, the sum of the array subtracted from the the sum of the set multiply by two
  const d = new Set(nums);
  let result = 0;
  d.forEach(num => (result += num));
  let b = nums.reduce((i, a) => i + a, 0);
  return result * 2 - b;
};

console.log(singleNumber([2, 2, 1]));
