class LinkedList: 
   def __init__(self, value):
      self.value = value
      self.next = None

# iterative
# 0(n + m) time | 0(1) space
# def mergeTwoLinkedList(head1, head2):
#    p1 = head1
#    p1Prev = None
#    p2 = head2

#    while p1 is not None and p2 is not None:
#       if p1.value < p2.value:
#          p1Prev = p1
#          p1 = p1.next
#       else:
#          if p1Prev is not None:
#             p1Prev.next = p2
#          p1Prev = p2
#          p2 = p2.next
#          p1Prev.next = p1
#    if p1 is None:
#       p1Prev.next = p2

#    return head1 if head1.value < head2.value else head2

# Recursive solution
# 0(n + m) time | 0(n + m) space
def mergeTwoLinkedList(head1, head2):
   recursiveMerge(head1. head2, None)
   return head1 if head1.value < head2.value else head2

def recursiveMerge(p1, p2, p1Prev):
   if p1 is None:
      p1Prev.next = p2
      return
   if p2 is None:
      return
   if p1.value < p2.value:
       recursiveMerge(p1.next. p2, p1)
   else:
      if p1Prev is None:
         p1Prev.next = p2
         newP2 = p2.next
         p2.next = p1
      recursiveMerge(p1, p2.next, p2)


