# Nth Fibonacci

# The fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the(n-1)th and (n-2)th numbers. Write a function that takes in an integer n and returns the nth Fibobacci number


# Sample input: 6

# RECURSIVE SOLUTION
# Sample output: 5(0, 1, 1, 2, 3, 5)
# O(2^n) time | O(n) space
# def getNthFib(n):
#     if n == 2:
#         return 1
#     elif n == 1:
#         return 0
#     else:
#         return getNthFib(n-1) + getNthFib(n - 2)


# MEMOIZATION
# O(n) time | O(n) space
# def getNthFib(n, memoize={1: 0, 2: 1}):
#     if n in memoize:
#         return memoize[n]
#     else:
#         memoize[n] = getNthFib(n-1, memoize) + getNthFib(n-2, memoize)
#         return memoize[n]

# ITERATIVE SOLUTION
# O(n) time | O(1) space
# def getNthFib(n):
#     lastTwo = [0, 1]
#     counter = 3
#     while counter <= n:
#         nextFib = lastTwo[0] + lastTwo[1]
#         lastTwo[0] = lastTwo[1]
#         lastTwo[1] = nextFib
#     return lastTwo[1] if n > 1 else lastTwo[0]
