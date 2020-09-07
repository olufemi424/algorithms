# Find Three Largest Numbers
# Write a function that takes in an array of integers and returns a sorted array of the three largest integers in the input array. Note that the funtion shoult return duplicate integers if necessary; for example, it should return [10,10,12] for a input array of [10, 5, 9, 10, 12]


# 0(n) time | 0(1) space

def findThreeLargestNumber(array):
    threeLargest = [None, None, None]
    for num in array:
        updateLargest(threeLargest, num)
    return threeLargest


def updateLargest(threeLargest, num):
    if(threeLargest[2] is None or num > threeLargest[2]):
        shiftAndUpdate(threeLargest, num, 2)
    if(threeLargest[1] is None or num > threeLargest[1]):
        shiftAndUpdate(threeLargest, num, 1)
    if(threeLargest[0] is None or num > threeLargest[0]):
        shiftAndUpdate(threeLargest, num, 0)


def shiftAndUpdate(array, num, idx):
    for i in range(idx + 1):
        if i == idx:
            array[i] = num
        else:
            array[i] = array[i + 1]


findThreeLargestNumber([10, 5, 9, 10, 12]
                       )
