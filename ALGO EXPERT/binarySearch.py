# Binary Search

# Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to find it the target number is contained in the array and should return its index if it is, otherwise -1


# sample input: [0,1,21,33,45,45,61,71,72,73], 33
# Sample output: 3


# O(Log(n)) time
# O(Log(n)) space

# def binarySerach(array, target):
#     return binarySerachHelper(array, target, 0, len(array)-1)


#  helper function
# def binarySerachHelper(array, target, left, right):
#     if left > right:  # if we move all thru the array and we can find a match
#         return -1
#     middle = (left + right) // 2  # divide array into two and
#     potentialMatch = array[middle]  # initialize a potential match
#     # if both pointer are on the same element
#     # if target is potential match return middle
#     if target == potentialMatch:
#         return middle
#    # if target is less than potential match(middle)
#    # move right pointer to the middle - 1
#     elif target < potentialMatch:
#         return binarySerachHelper(array, target, left, middle-1)
#    # else if target is greater than potential match(middle)
#    # move left pointer to the middle + 1
#     else:
#         return binarySerachHelper(array, target, middle+1, right)


# iterative method
# O(Log(n)) time
# O(Log(1)) space
# def binarySerach(array, target):
#     return binarySerachHelper(array, target, 0, len(array)-1)


# #  helper function
# def binarySerachHelper(array, target, left, right):
#     while left <= right:
#         middle = (left + right) // 2
#         potentialMatch = array[middle]
#         if target == potentialMatch:
#             print(target, potentialMatch)
#             return middle
#         elif target < potentialMatch:
#             right = middle - 1
#             print(right)
#         else:
#             left = middle + 1
#             print(left)
#     return -1


# print(binarySerach([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 23))
