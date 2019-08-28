# Depth-First Search

# You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. implement the depthFIrstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-First Search approach (specifically navigating the tree from left to right), store all the Nodes name in the input array, and returns it.


# class Node:
#     def __init__(self, name):
#         self.children = []
#         self.name = name

#     def addChild(self, name):
#         self.children.append(Node(name))
#         return self

#     def depthFIrstSearch(self, array):
#         array.append(self.name)
#         for child in self.children:
#             child.depthFIrstSearch(array)
#         return array
