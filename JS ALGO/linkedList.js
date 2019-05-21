// User defined class node
class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // functions
  //   ADD
  add(element) {
    //create new node
    const node = new Node(element);
    //to store current node
    let current;
    //  if list is empty ass element and make it head
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      //iterate to the end of the list
      while (current.next) {
        current = current.next;
      }
      //add node
      current.next = node;
    }
    this.size++;
  }

  //INSERT AT INDEX
  insertAt(element, index) {
    //edge case
    if (index > 0 && index > this.size) return false;
    //  create new node
    const node = new Node(element);
    //keep track of current and previous
    let curr, prev;
    curr = this.head; // the start of the node
    // add element to the first index
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      curr = this.head; //start from the head
      let it = 0;
      //iterate over the list to find the position to insert
      while (it < index) {
        prev = curr;
        curr = curr.next;
        it++;
      }
      // console.log(curr);// last node
      //add an element
      node.next = curr; //set last node to next
      prev.next = node; //set prev next to node
    }
  }

  removeFrom(index) {
    if (index > 0 && index > this.size) return -1;

    let curr,
      prev,
      it = 0;

    curr = this.head;
    prev = curr;

    //delete the first element
    if (index === 0) {
      this.head = curr.next;
    } else {
      //  iterate over the list to the position to remove element
      // loop will return elemet at index
      while (it < index) {
        prev = curr;
        curr = curr.next;
        it++;
      }
      //remove element
      prev.next = curr.next;
    }
    this.size--;
  }

  // removes a given element from the list
  removeElement(element) {
    let current = this.head;
    let prev = null;

    //iterate over the list till current is not null
    while (current !== null) {
      //  comparing element with current element if found then remoce it and return true
      if (current.element === element) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }

      prev = current;
      current = current.next;
    }
    //end of the list is null return negative 1
    return -1;
  }

  //HELPERS
  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;
    //iterate thro the list
    while (current !== null) {
      //if item found
      if (current.element === element) return count;
      current = current.next;
      count++;
    }
    return -1;
  }

  // checks the list for empty
  isEmpty() {
    return this.size === 0;
  }

  // gives the size of the list
  size_of_list() {
    console.log(this.size);
  }
}

const l1 = new LinkedList();
l1.add(1);
l1.add(2);
l1.add(3);
l1.add(4);
l1.printList();
l1.insertAt(10, 1);
l1.printList();
l1.removeFrom(3);
l1.printList();
l1.removeElement(4);
l1.printList();
console.log(l1.indexOf(2));
console.log(l1.isEmpty());
l1.size_of_list();
