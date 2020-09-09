/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
   let slow = head;
   let fast = head;
   
   while (fast && fast.next) {
       slow = slow.next;
       fast = fast.next.next;
   }
   return slow;
};

// O(n)

var middleNode = function(head) {
   let A = [head];
   while (A[A.length - 1].next != null)
       A.push(A[A.length - 1].next);
   return A[Math.trunc(A.length / 2)];
};