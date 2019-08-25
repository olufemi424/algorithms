# write a function that takes in a non-empty array of distinct integers and an integer representing a atarget sum. if any two numbers in the input array sum up to the target sum, the fuction should return them in an array, in sorted order. if no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of the numbers summing up to the target sum

# (n^2) time | 0(1) space

# def twoNumberSum(array, targetSum):
#     for i in range(len(array) - 1):
#         firstNum = array[i]
#         for j in range(i + 1, len(array)):
#             secondNum = array[j]
#             if firstNum + secondNum == targetSum:
#                 print([firstNum, secondNum])
#                 return [firstNum, secondNum]
#     print([])
#     return []


# twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)

# 0(n) time | 0(n) space

# def twoNumberSum(array, targetSum):
#     nums = {}
#     for num in array:
#         potentialMatch = targetSum - num
#         if potentialMatch in nums:
#             return [potentialMatch, num]
#         else:
#             nums[num] = True
#             print(nums)
#     return []


# twoNumberSum([3, -1, 5, -4, 8, 11, 6, 1], 10)

#sort the array
# pointer at the edge of the list L, R, if the sum of the items on the edge is greater than the target,then move the right pointer in one space backwards. if the sum is less than the target number, then move the pointer on the left forward. if the target are the same, return the array of the items on the left and right position.if not return an empty array

# 0(nLog(n)) time | 0(1) space
# def twoNumberSum(array, targetSum):
#     array.sort()
#     left = 0
#     right = len(array) - 1
#     while left < right:
#         currentSum = array[left] + array[right]
#         if currentSum == targetSum:
#             return [array[left], array[right]]
#         elif currentSum < targetSum:
#             left += 1
#         elif currentSum > targetSum:
#             right -= 1
#     return []


# twoNumberSum([3, -1, 5, -4, 8, 11, 6, 1], 3)


# def factorial(num):
#     fac = 1
#     for i in range(1, num + 1):
#         fac = fac * i
#         print(fac, i)
#     print(fac)


# factorial(24)
