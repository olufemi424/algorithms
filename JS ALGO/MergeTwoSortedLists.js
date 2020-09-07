class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// const mergeTwoLists = function(l1, l2) {
//   const dummy = new Node(0);
//   let l3 = dummy;

//   while (l1 !== null && l2 !== null) {
//     if (l1.element <= l2.element) {
//       l3.next = l1;
//       l1 = l1.next;
//     } else {
//       l3.next = l2;
//       l2 = l2.next;
//     }
//   }

//   if (l1 !== null) {
//     l3.next = l1;
//   }
//   if (l2 !== null) {
//     l3.next = l2;
//   }
//   return dummy.next;
// };

const mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  //get the head to the smallest
  const head = l1.element < l1.element ? l1 : l2;

  if (l1.element < l2.element) {
    head.next = mergeTwoLists(l1.next, l2);
  } else {
    head.next = mergeTwoLists(l1, l2.next);
  }
  return head;
};

const l1 = new Node(1);
const l2 = new Node(2);

console.log(mergeTwoLists(l1, l2));
