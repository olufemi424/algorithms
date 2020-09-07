var removeElement = function(nums, val) {
  if (nums === null) return;
  if (nums.length === 0) return;

  let j = 0;

  for (let a = 0; a < nums.length; a++) {
    if (nums[a] !== val) {
      nums[j] = nums[a];
      j++;
    }
  }
  return j;
};

const arr = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(arr, 2));
