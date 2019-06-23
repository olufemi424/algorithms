class Queue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(collection);
  }

  enqueue(element) {
    this.collection.push(element);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

// const q = new Queue();

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q);

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  printCollection() {
    console.log(this.collection);
  }

  //Element push is in an Array [element, priority]
  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (this.collection[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}
