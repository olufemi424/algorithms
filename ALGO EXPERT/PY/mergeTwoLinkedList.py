class LinkedList: 
   def __init__(self, value):
      self.value = value
      self.next = None


# 0(n + m) time | 0(1) space
def mergeTwoLinkedList(head1, head2):
   p1 = head1
   p1Prev = None
   p2 = head2

   while p1 is not None and p2 is not None:
      if p1.value < p2.value:
         p1Prev = p1
         p1 = p1.next
      else:
         if p1Prev is not None:
            p1Prev.next = p2
         p1Prev = p2
         p2 = p2.next
         p1Prev.next = p1
   if p1 is None:
      p1Prev.next = p2

   return head1 if head1.value < head2.value else head2

