const searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = Math.ceil(start + (end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid;
    } else {
      //nums[mid] < target
      start = mid;
    }
  }

  if (nums[end] < target) {
    return end + 1;
  } else if (nums[start] >= target) {
    return start;
  } else {
    //nums[start] < target < nums[end]
    return end;
  }
};

const arr = [1, 3, 5, 6];
console.log(searchInsert(arr, 5));

//nums.length -> number of items
//nums.length - 1 -> index of the last element
