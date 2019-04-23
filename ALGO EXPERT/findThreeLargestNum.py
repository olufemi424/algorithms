# Find Three Largest Numbers

# Write s function that takes in an array of integers and returns a sorted array of three largest integers in the input array. Note that the function should return duplicated integers if necessary; for example, it should return [10,10,12] for an input array of [10,5,9,10,12]

# time = O(n)
# space = O(1)


# def findThreeLargestNumbers(array):
#     threeLargest = [None, None, None]
#     for num in array:
#         updateLargest(threeLargest, num)
#     print(threeLargest)
#     return threeLargest


# def updateLargest(threeLargest, num):
#     if threeLargest[2] is None or num > threeLargest[2]:
#         shiftAndUpdate(threeLargest, num, 2)
#     elif threeLargest[1] is None or num > threeLargest[1]:
#         shiftAndUpdate(threeLargest, num, 1)
#     elif threeLargest[0] is None or num > threeLargest[0]:
#         shiftAndUpdate(threeLargest, num, 0)


# def shiftAndUpdate(array, num, idx):
#     for i in range(idx + 1):
#         if i == idx:
#             array[i] = num
#         else:
#             array[i] = array[i+1]


# findThreeLargestNumbers([10, 5, 9, 10, 12])
