// 416. Partition Equal Subset Sum
// Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
// Note:
// Each of the array element will not exceed 100.
// The array size will not exceed 200.
// Example 1:
// Input: [1, 5, 11, 5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Example 2:
// Input: [1, 2, 3, 5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

function canPartition(nums) {
	let total = 0;
	for (let element of nums) {
		total += element;
	}

	if (total % 2 !== 0) {
		return false;
	}

	return canPartitionNums(nums, 0, 0, total);

	console.log(total);
}

function canPartitionNums(nums, index, sum, total) {
	if (sum * 2 === total) {
		return true;
	}

	if (sum > total / 2 || index >= nums.length) {
		return false;
	}

	return (
		canPartitionNums(nums, index + 1, sum, total) ||
		canPartitionNums(nums, index + 1, sum + nums[index], total)
	);
}

console.log(canPartition([1, 5, 11, 5]));
