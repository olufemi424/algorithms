# Find Closest value in BST (Binary Search Tree) nodes.

# You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called 'value' and two children nodes stored in properties called 'left' and 'right', respectively. A node is said to be a BST node if and only if it satisfies the BST property: Its value is strictly greater than the value of every node to its left: its value is less than or equal to the values of every node to its right; and both of its childrean nodes are either BST nodes themselves or None(null) values. You are also given a target integer value; write a function that finds the  closest value to that target value contained in the BST. Assume that there will only be one closest value.


# Recursice
# Average: O(Log(n)) | O(Log(n))
# worst: O(n) time | O(n) space

# def findClosestValueInBst(tree, target):
#     return findClosestValueInBstHelper(tree, target, float('inf'))


# def findClosestValueInBstHelper(tree, target, closest):
#     if tree is None:
#         return closest
#     if abs(target - closest) > abs(target - tree.value):
#         closest = tree.value
#     if target < tree.value:
#         return findClosestValueInBstHelper(tree.left, target, closest)
#     elif target > tree.value:
#         return findClosestValueInBstHelper(tree.right, target, closest)
#     else:
#         return closest


# Iterative
# Average: O(Log(n)) | O(1)
# worst: O(n) time | O(1) space

# def findClosestValueInBst(tree, target):
#     return findClosestValueInBstHelper(tree, target, float('inf'))


# def findClosestValueInBstHelper(tree, target, closest):
#     currentNode = tree
#     while currentNode is not None:
#         if abs(target - closest) > abs(target - currentNode.value):
#             closest = currentNode.value
#         if target < currentNode.value:
#             currentNode = currentNode.left
#         elif target > currentNode.value:
#             currentNode = currentNode.right
#         else:
#             break
#     return closest
