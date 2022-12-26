# Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

# We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

# You must solve this problem without using the library's sort function.



# Example 1:

# Input: nums = [2,0,2,1,1,0]
# Output: [0,0,1,1,2,2]
# Example 2:

# Input: nums = [2,0,1]
# Output: [0,1,2]


# Constraints:

# n == nums.length
# 1 <= n <= 300
# nums[i] is either 0, 1, or 2.


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        # Do not return anything, modify nums in-place instead.
        l, r = 0, len(nums) -1 #declare left and right pointeres

        def swap(i, j): #swap items in-place
            tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp

        while l <= r: # while we are not at the end of the array
            if nums[i] == 0: # if current item is 0, we swap and move left pointere
                swap(l, i)
                l += 1

            # if current item is 2, we swap item at the right pointer with i,
            # and decrement left pointer, but i remain the same to fix the edge case
            elif nums[i] == 2:
                swap(i, r)
                r -= 1
                i -= 1
            i += 1
